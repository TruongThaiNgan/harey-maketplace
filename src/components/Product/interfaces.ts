import { SnackbarOrigin } from '@material-ui/core/Snackbar';

export interface State extends SnackbarOrigin {
  open: boolean;
}
export interface ProductProps {
  id: number;
  image1: string;
  image2: string;
  title: string;
  oldPrice?: string;
  price: string;
  timeCountdown?: boolean;
  row?: boolean;
}
