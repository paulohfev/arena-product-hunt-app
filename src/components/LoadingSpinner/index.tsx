import { SpinnerIcon } from './LoadingSpinner.styled'

const LoadingSpinner = () => {
  return <SpinnerIcon src='/icons/loading.png' alt='loading' width={48} height={48} data-testid='loading-spinner' />
}

export default LoadingSpinner
