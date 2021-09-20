export interface NavButtonState {
  'header.home': boolean;
  'header.shop': boolean;
  'header.aboutUs': boolean;
  'header.contactUs': boolean;
  'header.comingSoon': boolean;
  'header.pages': boolean;
  'header.elements': boolean;
}
interface buttonState {
  id: number;
  title:
    | 'header.home'
    | 'header.shop'
    | 'header.aboutUs'
    | 'header.contactUs'
    | 'header.comingSoon'
    | 'header.pages'
    | 'header.elements';
  component?: React.ReactNode;
  link: string;
}
export type ButtonListState = buttonState[];
