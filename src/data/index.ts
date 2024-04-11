import { Icons } from "@/components";

export const PartnersData = [
    {
        id: 1,
        icon_url: "/partners/01.jpg",
    },
    {
        id: 2,
        icon_url: "/partners/02.png",
    },
    {
        id: 3,
        icon_url: "/partners/03.png",
    },
    {
        id: 4,
        icon_url: "/partners/04.jpg",
    },
    {
        id: 5,
        icon_url: "/partners/05.png",
    },
];

interface IFaqData {
    id: number;
    title: string;
    num: number;
    numValue: null | string;
}

export const FaqData: IFaqData[] = [
    {
        id: 1,
        title: "На  рынке",
        num: 13,
        numValue: "лет",
    },
    {
        id: 2,
        title: "Товарные категории",
        num: 22,
        numValue: null,
    },
    {
        id: 3,
        title: "Количество  SKU",
        num: 840,
        numValue: null,
    },
    {
        id: 4,
        title: "Количество заводов",
        num: 15,
        numValue: null,
    },
    {
        id: 5,
        title: "На  рынке",
        num: 13,
        numValue: "лет",
    },
    {
        id: 6,
        title: "Общая площадь логистического хаба",
        num: 40,
        numValue: "311 кв.м",
    },
];

export const missionData = [
    {
        id: 1,
        image: "/mission/01.png",
        Icon: Icons.misssionOne,
        title: "Открытость",
        desc: "Мы открыты к взаимовыгодному сотрудничеству и партнерству.  Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
    },
    {
        id: 2,
        image: "/mission/02.png",
        Icon: Icons.misssionOne,
        title: "Открытость",
        desc: "Мы открыты к взаимовыгодному сотрудничеству и партнерству.  Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
    },
    {
        id: 3,
        image: "/mission/03.png",
        Icon: Icons.misssionOne,
        title: "Открытость",
        desc: "Мы открыты к взаимовыгодному сотрудничеству и партнерству.  Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
    },
];
