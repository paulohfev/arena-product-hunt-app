import { ButtonWrapper } from './Button.styled'

export type ButtonProps = {
  backgroundColor: string
  border?: string
  color: string
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, border, color, children, disabled, onClick }) => {
  return (
    <ButtonWrapper
      $backgroundColor={backgroundColor}
      $border={border}
      $color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
