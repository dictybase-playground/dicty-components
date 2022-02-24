export interface LoginButtonProps {
  handleClick: () => void
  text: string
}

export interface GoogleButtonProps extends LoginButtonProps {}
export interface LinkedInButtonProps extends LoginButtonProps {}
