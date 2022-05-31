import { Grid, Typography, Box, Theme } from "@material-ui/core"
import { footerStyles } from "../styles/footerStyles"
import { ReactNode, createElement } from "react"
import { pipe } from "fp-ts/function"
import * as A from "fp-ts/Array"
import * as O from "fp-ts/Option"
import { sequenceT } from "fp-ts/Apply"
import { Lens } from "monocle-ts"
import { curry2 } from "fp-ts-std/Function"

// -- Tyescript types
export interface FooterListItemProps {
  url: string
  label: string
}

export interface FooterProps {
  title: string
  items: FooterListItemProps[]
  theme?: Theme
}

export interface FooterHeaderProps {
  title: string
}

export interface ReactChildrenProps {
  children: ReactNode
}

// -- Functional react components
export const FooterHead = ({ title }: FooterHeaderProps) => {
  const classes = footerStyles()
  return (
    <Grid item xs={12}>
      <Box my={2} textAlign="center">
        <Typography className={classes.header}>{title}</Typography>
      </Box>
    </Grid>
  )
}

export const FooterList = ({ children }: ReactChildrenProps) => (
  <Grid item container justifyContent="center">
    {children}
  </Grid>
)

export const FooterListItem = ({ url, label }: FooterListItemProps) => {
  const classes = footerStyles()
  return (
    <Typography
      variant="body2"
      className={`${classes.link} ${classes.separator}`}
    >
      <a href={url}>{label}</a>
    </Typography>
  )
}

export const Sponsors = () => (
  <em>
    Supported by{" "}
    <a
      href="https://reporter.nih.gov/project-details/10024726"
      target="_blank"
      rel="noopener"
    >
      NIH
    </a>
    /
    <a href="https://www.nigms.nih.gov/" target="_blank" rel="noopener">
      NIGMS
    </a>
  </em>
)

export const SponsorsWrapper = ({ children }: ReactChildrenProps) => {
  const classes = footerStyles()
  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="flex-end"
      className={classes.support}
    >
      <Box mt={1} mb={2} mr={1} className={classes.link}>
        {children}
      </Box>
    </Grid>
  )
}

export const FooterContainer = ({ children }: ReactChildrenProps) => {
  const classes = footerStyles()
  return (
    <footer className={classes.footer}>
      <Box px={2}>
        <Grid container justifyContent="center">
          {children}
        </Grid>
      </Box>
    </footer>
  )
}

// ------ Functions for making pipelines
export const headerPipeline = curry2((footerData: FooterProps, key: number) => {
  const wrapper = (title: string) => createElement(FooterHead, { title, key })
  const titleLens = Lens.fromProp<FooterProps>()("title")
  return pipe(footerData, titleLens.get, wrapper)
})
export const listPipeline = curry2((footerData: FooterProps, index: number) => {
  const itemWrapper = (key: number, props: FooterListItemProps) =>
    createElement(FooterListItem, { key, ...props })
  const appendKey = (item: ReactNode) =>
    sequenceT(O.Apply)(O.of(item), O.of(index))
  const itemListWrapper = ([children, key]: [ReactNode, number]) => (
    <FooterList key={key} children={children} />
  )
  const itemsLens = Lens.fromProp<FooterProps>()("items")
  return pipe(
    footerData,
    itemsLens.get,
    A.mapWithIndex(itemWrapper),
    appendKey,
    O.map(itemListWrapper),
    O.getOrElse(() => <></>),
  )
})
export const sponsorsPipeline = (key: number) =>
  pipe(Sponsors, (item) => <SponsorsWrapper key={key} children={item} />)

// -- The final functional pipeline based footer react component
export function Footer({ footerData }: { footerData: FooterProps }) {
  const footerWrapper = (children: ReactNode) =>
    createElement(FooterContainer, null, children)
  return pipe(
    [headerPipeline, listPipeline],
    A.map((fn) => fn(footerData)),
    A.append(sponsorsPipeline),
    A.mapWithIndex((i, fn) => fn(i)),
    footerWrapper,
  )
}
