export interface ModalProps {
  type:
    | 'info'
    | 'success'
    | 'error'
    | 'warning'
    | 'loading'
    | 'launch'
    | 'end'
    | 'wait';
  title?: string;
  content: string;
  width: number | string;
  height: number | string;
  position: 'topleft' | 'topright' | 'center' | 'bottomleft' | 'bottomright';
  delay: number;
}
