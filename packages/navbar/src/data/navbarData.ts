import { NavItem } from "@dictyBase/navbar/src/types"

export const navbarData: Array<NavItem> = [
  {
    type: "genomes",
    id: "1",
    attributes: {
      display: "Genomes",
      items: [
        {
          label: "Dictyostelium discoideum AX4",
          link: "/",
        },
        {
          label: "Dictyostelium purpureum AX1",
          link: "http://genomes.dictybase.org/purpureum",
        },
        {
          label: "Dictyostelium fasciculatum SH3",
          link: "http://genomes.dictybase.org/fasciculatum",
        },
        {
          label: "Polysphondylium pallidum PN500",
          link: "http://genomes.dictybase.org/pallidum",
        },
      ],
    },
  },
  {
    type: "tools",
    id: "2",
    attributes: {
      display: "Tools",
      items: [
        {
          label: "Genome Browser",
          link: "http://dictybase.org/tools/jbrowse/?data=data/jbrowse/discoideum&loc=6:1..50011&tracks=reference,gene,transcript",
        },
        {
          label: "DictyAccess",
          link: "/dictyaccess",
        },
      ],
    },
  },
  {
    type: "explore",
    id: "3",
    attributes: {
      display: "Explore",
      items: [
        {
          label: "Dicty Art",
          link: "/explore/art",
        },
        {
          label: "Gallery",
          link: "/explore/gallery",
        },
        {
          label: "Learn About Dicty",
          link: "/explore/learn",
        },
        {
          label: "Teaching Protocols",
          link: "/explore/teach",
        },
        {
          label: "Useful Links",
          link: "/explore/links",
        },
      ],
    },
  },
  {
    type: "research",
    id: "4",
    attributes: {
      display: "Research",
      items: [
        {
          label: "Techniques",
          link: "/research/techniques",
        },
        {
          label: "Anatomy Ontology",
          link: "/research/ontology",
        },
        {
          label: "Codon Bias Table",
          link: "/research/codon",
        },
        {
          label: "Nomenclature Guidelines",
          link: "/research/nomenclature",
        },
        {
          label: "Phenotyping",
          link: "/research/phenotype",
        },
        {
          label: "Axenic Strain History",
          link: "/research/strain-history",
        },
      ],
    },
  },
  {
    type: "dsc",
    id: "5",
    attributes: {
      display: "Dicty Stock Center",
      items: [
        {
          label: "Stock Center Home",
          link: "/stockcenter",
        },
        {
          label: "Strain Catalog",
          link: "/stockcenter/strains",
        },
        {
          label: "Plasmid Catalog",
          link: "/stockcenter/plasmids",
        },
        {
          label: "Order Information",
          link: "/stockcenter/information/order",
        },
        {
          label: "Deposit Information",
          link: "/stockcenter/information/deposit",
        },
        {
          label: "Payment Information",
          link: "/stockcenter/information/payment",
        },
        {
          label: "FAQ",
          link: "/stockcenter/information/faq",
        },
        {
          label: "Standard Operating Procedures",
          link: "https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i",
        },
      ],
    },
  },
  {
    type: "community",
    id: "6",
    attributes: {
      display: "Community",
      items: [
        {
          label: "Cite Us",
          link: "/community/citation",
        },
        {
          label: "Dicty Annual Conferences",
          link: "/community/conference",
        },
        {
          label: "Dicty Email Forum",
          link: "/community/listserv",
        },
        {
          label: "Dicty Labs",
          link: "/community/labs",
        },
        {
          label: "History",
          link: "/community/history",
        },
        {
          label: "Jobs",
          link: "/community/jobs",
        },
        {
          label: "Community Annotations",
          link: "/community/annotations",
        },
      ],
    },
  },
]
