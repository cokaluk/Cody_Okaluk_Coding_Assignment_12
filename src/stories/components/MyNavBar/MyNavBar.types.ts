import MyLink from "../MyLink/MyLink";

export interface MyNavBarProps {
 stationairy?: boolean;
 disabled?: boolean;
 links: React.ReactElement<typeof MyLink>[];
}