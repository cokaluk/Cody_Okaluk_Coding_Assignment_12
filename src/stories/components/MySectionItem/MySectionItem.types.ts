import MyImage from '../MyImage/MyImage';


export interface MySectionItemProps {
 Image: React.ReactElement<typeof MyImage>;
 HeaderText: string;
 BodyText: string;
 Disabled?: boolean;
}