export type ModalProps = {
  text?: JSX.Element | string;
  closeModal: React.MouseEventHandler<HTMLElement>;
  show: boolean;
  className?: string;
};
