import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            width="91"
            height="46"
            viewBox="0 0 91 46"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clip-path="url(#clip0_5015_1289)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 44.4815H1.12132V38.5858H0V44.4815ZM86.0659 40.5741H86.8304V42.3431H87.3628V40.5741H88.1273V40.1085H86.0645V40.5741H86.0659ZM89.3095 40.1085H88.5096V42.3431H89.0037V40.6944L89.5644 42.3431H89.9197L90.4832 40.6774V42.3431H91V40.1085H90.2312L89.7711 41.4714L89.3081 40.1085H89.3095ZM4.41592 42.8371C4.89022 42.8951 5.03888 43.0536 5.03888 43.3112C5.03888 43.5772 4.76421 43.7753 4.17523 43.7753C3.46025 43.7753 3.20257 43.4017 3.16151 43.3012H2.0232C2.10673 43.6918 2.61359 44.5976 4.17523 44.5976C5.46221 44.5976 6.11915 44.0584 6.11915 43.2687C6.11915 42.4394 5.65476 42.0063 4.51645 41.9073L3.80146 41.8323C3.37813 41.7742 3.20399 41.6242 3.20399 41.3921C3.20399 41.1346 3.47016 40.969 3.97702 40.969C4.60847 40.969 4.84916 41.2605 4.9242 41.3511H6.04552C5.92943 40.9435 5.4976 40.1637 3.98552 40.1637C2.8557 40.1637 2.13222 40.6619 2.13222 41.4501C2.13222 42.2639 2.75517 42.6955 3.67687 42.762C3.96853 42.7946 4.11719 42.8116 4.41592 42.8371ZM7.99935 42.2384C7.99935 41.5832 8.41418 41.1346 9.05413 41.1346C9.68558 41.1346 10.0763 41.5747 10.0763 42.2384V44.4801H11.1481V42.0304C11.1481 40.9591 10.4501 40.1878 9.39534 40.1878C8.6308 40.1878 8.15792 40.6859 7.99935 40.9845V38.3692H6.94457V44.4801H7.99935V42.2384ZM14.2091 40.1708C12.9136 40.1708 11.941 41.1006 11.941 42.3799C11.941 43.6579 12.9136 44.5891 14.2091 44.5891C15.489 44.5891 16.4687 43.6593 16.4687 42.3799C16.4687 41.1006 15.489 40.1708 14.2091 40.1708ZM14.2091 43.6423C13.5026 43.6423 13.0127 43.0776 13.0127 42.3799C13.0127 41.6822 13.5026 41.1176 14.2091 41.1176C14.9156 41.1176 15.397 41.6653 15.397 42.3799C15.397 43.0946 14.9156 43.6423 14.2091 43.6423ZM18.3744 42.2384C18.3744 41.5832 18.7893 41.1346 19.4292 41.1346C20.0607 41.1346 20.4514 41.5747 20.4514 42.2384V44.4801H21.5232V42.0304C21.5232 40.9591 20.8252 40.1878 19.7704 40.1878C19.0059 40.1878 18.5316 40.6859 18.3744 40.9845V40.2783H17.3196V44.4801H18.3744V42.2384ZM26.5437 41.6653C26.4771 41.2081 25.9703 40.1708 24.4752 40.1708C23.2533 40.1708 22.3146 41.0836 22.3146 42.3799C22.3146 43.6749 23.2618 44.5891 24.4822 44.5891C25.9858 44.5891 26.5012 43.5348 26.5423 43.0946H25.5045C25.4294 43.2107 25.1972 43.6508 24.4992 43.6508C23.8352 43.6508 23.3949 43.0861 23.3949 42.3799C23.3949 41.6737 23.8437 41.1091 24.4922 41.1091C25.1647 41.1091 25.4223 41.5577 25.4889 41.6653H26.5437ZM28.3998 42.2384C28.3998 41.5832 28.8161 41.1346 29.4546 41.1346C30.086 41.1346 30.4768 41.5747 30.4768 42.2384V44.4801H31.5486V42.0304C31.5486 40.9591 30.8506 40.1878 29.7958 40.1878C29.0313 40.1878 28.557 40.6859 28.3998 40.9845V38.3692H27.345V44.4801H28.3998V42.2384ZM32.6402 44.4801H33.7034V38.3692H32.6402V44.4801ZM34.829 39.6061H35.9333V38.3438H34.829V39.6061ZM34.8545 44.4801H35.9178V40.2783H34.8545V44.4801ZM59.8563 44.4801H60.9111V40.2783H59.8479V40.9095C59.7558 40.7355 59.3325 40.1878 58.4448 40.1878C57.3574 40.1878 56.4598 41.0185 56.4598 42.3799C56.4598 43.7499 57.3574 44.5721 58.4363 44.5721C59.3665 44.5721 59.7742 43.982 59.8563 43.8164V44.4801ZM59.8648 42.3799C59.8648 43.0946 59.4075 43.6423 58.718 43.6423C58.0045 43.6423 57.5387 43.0946 57.5387 42.3799C57.5387 41.6653 58.0045 41.1176 58.718 41.1176C59.4075 41.1176 59.8648 41.6653 59.8648 42.3799ZM63.0915 42.2653C63.0915 41.5987 63.4157 41.3001 64.3133 41.3001H65.4347V40.2458H64.4549C63.5247 40.2458 63.2005 40.7355 63.0929 40.976V40.2699H62.0381V44.4801H63.0929V42.2653H63.0915ZM69.2177 44.4801H70.2725V40.2783H69.2092V40.9095C69.1172 40.7355 68.6939 40.1878 67.8061 40.1878C66.7174 40.1878 65.8198 41.0185 65.8198 42.3799C65.8198 43.7499 66.7174 44.5721 67.7962 44.5721C68.7264 44.5721 69.1342 43.982 69.2163 43.8164V44.4801H69.2177ZM69.2262 42.3799C69.2262 43.0946 68.7689 43.6423 68.0794 43.6423C67.3644 43.6423 66.9 43.0946 66.9 42.3799C66.9 41.6653 67.3658 41.1176 68.0794 41.1176C68.7689 41.1176 69.2262 41.6653 69.2262 42.3799ZM74.4548 44.4801H75.8749L73.5232 42.2384L75.7588 40.2783H74.3713L72.4444 41.9893V38.3692H71.3981V44.4801H72.4444V42.5696L74.4548 44.4801ZM79.3181 44.4801H80.3729V40.2783H79.3096V40.9095C79.2176 40.7355 78.7943 40.1878 77.9066 40.1878C76.8178 40.1878 75.9216 41.0185 75.9216 42.3799C75.9216 43.7499 76.8192 44.5721 77.8981 44.5721C78.8283 44.5721 79.236 43.982 79.3181 43.8164V44.4801ZM79.3266 42.3799C79.3266 43.0946 78.8693 43.6423 78.1798 43.6423C77.4648 43.6423 77.0004 43.0946 77.0004 42.3799C77.0004 41.6653 77.4662 41.1176 78.1798 41.1176C78.8693 41.1176 79.3266 41.6653 79.3266 42.3799ZM81.5155 44.4801H82.5787V38.3692H81.5155V44.4801ZM83.7043 39.6061H84.8086V38.3438H83.7043V39.6061ZM83.7284 44.4801H84.7917V40.2783H83.7284V44.4801ZM43.372 40.2783H42.2847L41.0473 43.2177L39.8098 40.2783H38.6135L40.5248 44.5381H41.5216L43.3735 40.2783H43.372ZM47.056 44.4801H48.1108V40.2783H47.0475V40.9095C46.9555 40.7355 46.5321 40.1878 45.6444 40.1878C44.5571 40.1878 43.6594 41.0185 43.6594 42.3799C43.6594 43.7499 44.5571 44.5721 45.6359 44.5721C46.5661 44.5721 46.9739 43.982 47.056 43.8164V44.4801ZM47.0645 42.3799C47.0645 43.0946 46.6072 43.6423 45.9177 43.6423C45.2027 43.6423 44.7383 43.0946 44.7383 42.3799C44.7383 41.6653 45.2041 41.1176 45.9177 41.1176C46.6072 41.1176 47.0645 41.6653 47.0645 42.3799ZM52.4177 43.8419C52.4998 44.0074 52.9656 44.5721 53.8717 44.5721C54.976 44.5721 55.8737 43.7499 55.8737 42.3799C55.8737 41.01 54.976 40.1878 53.8717 40.1878C52.95 40.1878 52.5182 40.785 52.4262 40.9435V38.3692H51.3799V44.4801H52.4191V43.8404L52.4177 43.8419ZM52.4092 42.3799C52.4092 41.6582 52.8835 41.1176 53.6055 41.1176C54.3276 41.1176 54.7934 41.6568 54.7934 42.3799C54.7934 43.0946 54.3276 43.6423 53.6055 43.6423C52.8835 43.6423 52.4092 43.0946 52.4092 42.3799Z"
                    fill="inherit"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.2027 27.3839V19.8634C20.2027 15.7381 16.8076 12.343 12.6791 12.343C8.55195 12.343 5.15825 15.7395 5.15825 19.8634C5.15825 23.9902 8.55054 27.3839 12.6791 27.3839H20.2027ZM54.2742 25.6007C53.3667 23.8289 52.891 21.8674 52.891 19.8634C52.891 12.8907 58.5953 7.18738 65.571 7.18738C73.3707 7.18738 79.3624 14.2451 78.0811 21.9382L77.9962 22.4434H58.5104C59.5906 25.3715 62.4152 27.3839 65.571 27.3839H79.6343V0.25H84.7921V32.5409H65.5073C63.2278 32.5409 61.0192 31.9098 59.0838 30.7464C58.9181 30.6389 58.7539 30.5285 58.5939 30.4153C56.5296 31.7909 54.0746 32.5409 51.5884 32.5409H51.5007C44.5306 32.5409 38.8405 26.8263 38.8405 19.8649V12.3685C34.9795 12.6812 31.927 15.9575 31.927 19.8649V32.5409H26.7678V19.8649C26.7678 13.1115 32.1281 7.52137 38.8405 7.20295V0.251415H44.0011V7.18879H50.8338V12.3444H44.0011V19.8649C44.0011 23.993 47.3948 27.3853 51.5247 27.3853C52.6814 27.3853 53.8452 27.1178 54.8873 26.6098C54.6693 26.2829 54.4654 25.9475 54.2757 25.6036L54.2742 25.6007ZM72.6345 17.2863C71.5542 14.3554 68.7297 12.343 65.571 12.343C62.4137 12.343 59.5892 14.3569 58.5104 17.2863H72.6345ZM25.3605 32.5395H12.655C5.68493 32.5395 -0.000976562 26.8235 -0.000976562 19.8634C-0.000976562 12.8907 5.70192 7.18738 12.6791 7.18738C19.6548 7.18738 25.3605 12.8907 25.3605 19.8634V32.5395Z"
                    fill="inherit"
                />
            </g>
            <defs>
                <clipPath id="clip0_5015_1289">
                    <rect
                        width="91"
                        height="45.5"
                        fill="inherit"
                        transform="translate(0 0.25)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    logoGreen: (props: IconProps) => (
        <svg
            width="91"
            height="46"
            viewBox="0 0 91 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clip-path="url(#clip0_5032_1622)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 44.4815H1.12132V38.5858H0V44.4815ZM86.0659 40.5741H86.8304V42.3431H87.3628V40.5741H88.1273V40.1085H86.0645V40.5741H86.0659ZM89.3095 40.1085H88.5096V42.3431H89.0037V40.6944L89.5644 42.3431H89.9197L90.4832 40.6774V42.3431H91V40.1085H90.2312L89.7711 41.4714L89.3081 40.1085H89.3095ZM4.41592 42.8371C4.89022 42.8951 5.03888 43.0536 5.03888 43.3112C5.03888 43.5772 4.76421 43.7753 4.17523 43.7753C3.46025 43.7753 3.20257 43.4017 3.16151 43.3012H2.0232C2.10673 43.6918 2.61359 44.5976 4.17523 44.5976C5.46221 44.5976 6.11915 44.0584 6.11915 43.2687C6.11915 42.4394 5.65476 42.0063 4.51645 41.9073L3.80146 41.8323C3.37813 41.7742 3.20399 41.6242 3.20399 41.3921C3.20399 41.1346 3.47016 40.969 3.97702 40.969C4.60847 40.969 4.84916 41.2605 4.9242 41.3511H6.04552C5.92943 40.9435 5.4976 40.1637 3.98552 40.1637C2.8557 40.1637 2.13222 40.6619 2.13222 41.4501C2.13222 42.2639 2.75517 42.6955 3.67687 42.762C3.96853 42.7946 4.11719 42.8116 4.41592 42.8371ZM7.99935 42.2384C7.99935 41.5832 8.41418 41.1346 9.05413 41.1346C9.68558 41.1346 10.0763 41.5747 10.0763 42.2384V44.4801H11.1481V42.0304C11.1481 40.9591 10.4501 40.1878 9.39534 40.1878C8.6308 40.1878 8.15792 40.6859 7.99935 40.9845V38.3692H6.94457V44.4801H7.99935V42.2384ZM14.2091 40.1708C12.9136 40.1708 11.941 41.1006 11.941 42.3799C11.941 43.6579 12.9136 44.5891 14.2091 44.5891C15.489 44.5891 16.4687 43.6593 16.4687 42.3799C16.4687 41.1006 15.489 40.1708 14.2091 40.1708ZM14.2091 43.6423C13.5026 43.6423 13.0127 43.0776 13.0127 42.3799C13.0127 41.6822 13.5026 41.1176 14.2091 41.1176C14.9156 41.1176 15.397 41.6653 15.397 42.3799C15.397 43.0946 14.9156 43.6423 14.2091 43.6423ZM18.3744 42.2384C18.3744 41.5832 18.7893 41.1346 19.4292 41.1346C20.0607 41.1346 20.4514 41.5747 20.4514 42.2384V44.4801H21.5232V42.0304C21.5232 40.9591 20.8252 40.1878 19.7704 40.1878C19.0059 40.1878 18.5316 40.6859 18.3744 40.9845V40.2783H17.3196V44.4801H18.3744V42.2384ZM26.5437 41.6653C26.4771 41.2081 25.9703 40.1708 24.4752 40.1708C23.2533 40.1708 22.3146 41.0836 22.3146 42.3799C22.3146 43.6749 23.2618 44.5891 24.4822 44.5891C25.9858 44.5891 26.5012 43.5348 26.5423 43.0946H25.5045C25.4294 43.2107 25.1972 43.6508 24.4992 43.6508C23.8352 43.6508 23.3949 43.0861 23.3949 42.3799C23.3949 41.6737 23.8437 41.1091 24.4922 41.1091C25.1647 41.1091 25.4223 41.5577 25.4889 41.6653H26.5437ZM28.3998 42.2384C28.3998 41.5832 28.8161 41.1346 29.4546 41.1346C30.086 41.1346 30.4768 41.5747 30.4768 42.2384V44.4801H31.5486V42.0304C31.5486 40.9591 30.8506 40.1878 29.7958 40.1878C29.0313 40.1878 28.557 40.6859 28.3998 40.9845V38.3692H27.345V44.4801H28.3998V42.2384ZM32.6402 44.4801H33.7034V38.3692H32.6402V44.4801ZM34.829 39.6061H35.9333V38.3438H34.829V39.6061ZM34.8545 44.4801H35.9178V40.2783H34.8545V44.4801ZM59.8563 44.4801H60.9111V40.2783H59.8479V40.9095C59.7558 40.7355 59.3325 40.1878 58.4448 40.1878C57.3574 40.1878 56.4598 41.0185 56.4598 42.3799C56.4598 43.7499 57.3574 44.5721 58.4363 44.5721C59.3665 44.5721 59.7742 43.982 59.8563 43.8164V44.4801ZM59.8648 42.3799C59.8648 43.0946 59.4075 43.6423 58.718 43.6423C58.0045 43.6423 57.5387 43.0946 57.5387 42.3799C57.5387 41.6653 58.0045 41.1176 58.718 41.1176C59.4075 41.1176 59.8648 41.6653 59.8648 42.3799ZM63.0915 42.2653C63.0915 41.5987 63.4157 41.3001 64.3133 41.3001H65.4347V40.2458H64.4549C63.5247 40.2458 63.2005 40.7355 63.0929 40.976V40.2699H62.0381V44.4801H63.0929V42.2653H63.0915ZM69.2177 44.4801H70.2725V40.2783H69.2092V40.9095C69.1172 40.7355 68.6939 40.1878 67.8061 40.1878C66.7174 40.1878 65.8198 41.0185 65.8198 42.3799C65.8198 43.7499 66.7174 44.5721 67.7962 44.5721C68.7264 44.5721 69.1342 43.982 69.2163 43.8164V44.4801H69.2177ZM69.2262 42.3799C69.2262 43.0946 68.7689 43.6423 68.0794 43.6423C67.3644 43.6423 66.9 43.0946 66.9 42.3799C66.9 41.6653 67.3658 41.1176 68.0794 41.1176C68.7689 41.1176 69.2262 41.6653 69.2262 42.3799ZM74.4548 44.4801H75.8749L73.5232 42.2384L75.7588 40.2783H74.3713L72.4443 41.9893V38.3692H71.3981V44.4801H72.4443V42.5696L74.4548 44.4801ZM79.3181 44.4801H80.3729V40.2783H79.3096V40.9095C79.2176 40.7355 78.7943 40.1878 77.9066 40.1878C76.8178 40.1878 75.9216 41.0185 75.9216 42.3799C75.9216 43.7499 76.8192 44.5721 77.8981 44.5721C78.8283 44.5721 79.236 43.982 79.3181 43.8164V44.4801ZM79.3266 42.3799C79.3266 43.0946 78.8693 43.6423 78.1798 43.6423C77.4648 43.6423 77.0004 43.0946 77.0004 42.3799C77.0004 41.6653 77.4662 41.1176 78.1798 41.1176C78.8693 41.1176 79.3266 41.6653 79.3266 42.3799ZM81.5155 44.4801H82.5787V38.3692H81.5155V44.4801ZM83.7043 39.6061H84.8086V38.3438H83.7043V39.6061ZM83.7284 44.4801H84.7917V40.2783H83.7284V44.4801ZM43.372 40.2783H42.2847L41.0473 43.2177L39.8098 40.2783H38.6135L40.5248 44.5381H41.5216L43.3734 40.2783H43.372ZM47.056 44.4801H48.1108V40.2783H47.0475V40.9095C46.9555 40.7355 46.5321 40.1878 45.6444 40.1878C44.5571 40.1878 43.6594 41.0185 43.6594 42.3799C43.6594 43.7499 44.5571 44.5721 45.6359 44.5721C46.5661 44.5721 46.9739 43.982 47.056 43.8164V44.4801ZM47.0645 42.3799C47.0645 43.0946 46.6072 43.6423 45.9177 43.6423C45.2027 43.6423 44.7383 43.0946 44.7383 42.3799C44.7383 41.6653 45.2041 41.1176 45.9177 41.1176C46.6072 41.1176 47.0645 41.6653 47.0645 42.3799ZM52.4177 43.8419C52.4998 44.0074 52.9656 44.5721 53.8717 44.5721C54.976 44.5721 55.8737 43.7499 55.8737 42.3799C55.8737 41.01 54.976 40.1878 53.8717 40.1878C52.95 40.1878 52.5182 40.785 52.4262 40.9435V38.3692H51.3799V44.4801H52.4191V43.8404L52.4177 43.8419ZM52.4092 42.3799C52.4092 41.6582 52.8835 41.1176 53.6055 41.1176C54.3276 41.1176 54.7934 41.6568 54.7934 42.3799C54.7934 43.0946 54.3276 43.6423 53.6055 43.6423C52.8835 43.6423 52.4092 43.0946 52.4092 42.3799Z"
                    fill="#0F1722"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.2027 27.3839V19.8634C20.2027 15.7381 16.8076 12.343 12.6791 12.343C8.55195 12.343 5.15825 15.7395 5.15825 19.8634C5.15825 23.9902 8.55054 27.3839 12.6791 27.3839H20.2027ZM54.2742 25.6007C53.3667 23.8289 52.891 21.8674 52.891 19.8634C52.891 12.8907 58.5953 7.18738 65.571 7.18738C73.3707 7.18738 79.3625 14.2451 78.0811 21.9382L77.9962 22.4434H58.5104C59.5906 25.3715 62.4152 27.3839 65.571 27.3839H79.6343V0.25H84.7921V32.5409H65.5073C63.2278 32.5409 61.0192 31.9098 59.0838 30.7464C58.9181 30.6389 58.7539 30.5285 58.5939 30.4153C56.5296 31.7909 54.0746 32.5409 51.5884 32.5409H51.5007C44.5306 32.5409 38.8405 26.8263 38.8405 19.8649V12.3685C34.9795 12.6812 31.927 15.9575 31.927 19.8649V32.5409H26.7678V19.8649C26.7678 13.1115 32.1281 7.52137 38.8405 7.20295V0.251415H44.0011V7.18879H50.8338V12.3444H44.0011V19.8649C44.0011 23.993 47.3948 27.3853 51.5247 27.3853C52.6814 27.3853 53.8452 27.1178 54.8873 26.6098C54.6693 26.2829 54.4654 25.9475 54.2757 25.6036L54.2742 25.6007ZM72.6345 17.2863C71.5542 14.3554 68.7297 12.343 65.571 12.343C62.4138 12.343 59.5892 14.3569 58.5104 17.2863H72.6345ZM25.3605 32.5395H12.655C5.68493 32.5395 -0.000976562 26.8235 -0.000976562 19.8634C-0.000976562 12.8907 5.70192 7.18738 12.6791 7.18738C19.6548 7.18738 25.3605 12.8907 25.3605 19.8634V32.5395Z"
                    fill="url(#paint0_linear_5032_1622)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_5032_1622"
                    x1="4.12838"
                    y1="3.80057"
                    x2="68.5111"
                    y2="46.1703"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#006C41" />
                    <stop offset="0.490196" stop-color="#057D45" />
                    <stop offset="1" stop-color="#14A167" />
                </linearGradient>
                <clipPath id="clip0_5032_1622">
                    <rect
                        width="91"
                        height="45.5"
                        fill="white"
                        transform="translate(0 0.25)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    dropDown: (props: IconProps) => (
        <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.348 6.71606C15.8501 6.71606 16.6023 8.53218 15.5402 9.59433L12.1107 13.0238C11.4522 13.6823 10.3847 13.6823 9.72624 13.0238L6.29672 9.59433C5.23457 8.53218 5.98683 6.71606 7.48893 6.71606H14.348Z"
                fill="inherit"
            />
        </svg>
    ),
    global: (props: IconProps) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.3748 17.425C6.3498 17.425 6.31647 17.4417 6.29147 17.4417C4.6748 16.6417 3.35814 15.3167 2.5498 13.7C2.5498 13.675 2.56647 13.6417 2.56647 13.6167C3.58314 13.9167 4.63314 14.1417 5.6748 14.3167C5.85814 15.3667 6.0748 16.4084 6.3748 17.425Z"
                fill="inherit"
            />
            <path
                d="M17.4502 13.7084C16.6252 15.3667 15.2502 16.7084 13.5752 17.5167C13.8919 16.4584 14.1585 15.3917 14.3335 14.3167C15.3835 14.1417 16.4169 13.9167 17.4335 13.6167C17.4252 13.65 17.4502 13.6834 17.4502 13.7084Z"
                fill="inherit"
            />
            <path
                d="M17.5169 6.42507C16.4669 6.1084 15.4085 5.85007 14.3335 5.66673C14.1585 4.59173 13.9002 3.52507 13.5752 2.4834C15.3002 3.3084 16.6919 4.70007 17.5169 6.42507Z"
                fill="inherit"
            />
            <path
                d="M6.37507 2.57505C6.07507 3.59172 5.8584 4.62505 5.6834 5.67505C4.6084 5.84172 3.54173 6.10838 2.4834 6.42505C3.29173 4.75005 4.6334 3.37505 6.29173 2.55005C6.31673 2.55005 6.35006 2.57505 6.37507 2.57505Z"
                fill="inherit"
            />
            <path
                d="M12.9085 5.49175C10.9751 5.27508 9.02513 5.27508 7.0918 5.49175C7.30013 4.35008 7.5668 3.20841 7.9418 2.10841C7.95846 2.04175 7.95013 1.99175 7.95846 1.92508C8.6168 1.76675 9.2918 1.66675 10.0001 1.66675C10.7001 1.66675 11.3835 1.76675 12.0335 1.92508C12.0418 1.99175 12.0418 2.04175 12.0585 2.10841C12.4335 3.21675 12.7001 4.35008 12.9085 5.49175Z"
                fill="inherit"
            />
            <path
                d="M5.4915 12.9085C4.3415 12.7001 3.20817 12.4335 2.10817 12.0585C2.0415 12.0418 1.9915 12.0501 1.92484 12.0418C1.7665 11.3835 1.6665 10.7085 1.6665 10.0001C1.6665 9.30013 1.7665 8.6168 1.92484 7.9668C1.9915 7.95846 2.0415 7.95846 2.10817 7.9418C3.2165 7.57513 4.3415 7.30013 5.4915 7.0918C5.28317 9.02513 5.28317 10.9751 5.4915 12.9085Z"
                fill="inherit"
            />
            <path
                d="M18.3333 10.0001C18.3333 10.7085 18.2333 11.3835 18.075 12.0418C18.0083 12.0501 17.9583 12.0418 17.8916 12.0585C16.7833 12.4251 15.65 12.7001 14.5083 12.9085C14.725 10.9751 14.725 9.02513 14.5083 7.0918C15.65 7.30013 16.7916 7.5668 17.8916 7.9418C17.9583 7.95846 18.0083 7.9668 18.075 7.9668C18.2333 8.62513 18.3333 9.30013 18.3333 10.0001Z"
                fill="inherit"
            />
            <path
                d="M12.9085 14.5083C12.7001 15.6583 12.4335 16.7916 12.0585 17.8916C12.0418 17.9583 12.0418 18.0083 12.0335 18.075C11.3835 18.2333 10.7001 18.3333 10.0001 18.3333C9.2918 18.3333 8.6168 18.2333 7.95846 18.075C7.95013 18.0083 7.95846 17.9583 7.9418 17.8916C7.57513 16.7833 7.30013 15.6583 7.0918 14.5083C8.05846 14.6166 9.02513 14.6916 10.0001 14.6916C10.9751 14.6916 11.9501 14.6166 12.9085 14.5083Z"
                fill="inherit"
            />
            <path
                d="M13.1359 13.1362C11.0517 13.3992 8.94797 13.3992 6.86373 13.1362C6.60076 11.0519 6.60076 8.94822 6.86373 6.86397C8.94797 6.60101 11.0517 6.60101 13.1359 6.86397C13.3989 8.94822 13.3989 11.0519 13.1359 13.1362Z"
                fill="inherit"
            />
        </svg>
    ),
    call: (props: IconProps) => (
        <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.1076 12.4584L8.56592 14.0001C8.24092 14.3251 7.72425 14.3251 7.39092 14.0084C7.29925 13.9167 7.20758 13.8334 7.11592 13.7417C6.25758 12.8751 5.48258 11.9667 4.79092 11.0167C4.10758 10.0667 3.55758 9.11675 3.15758 8.17508C2.76592 7.22508 2.56592 6.31675 2.56592 5.45008C2.56592 4.88341 2.66592 4.34175 2.86592 3.84175C3.06592 3.33341 3.38258 2.86675 3.82425 2.45008C4.35758 1.92508 4.94092 1.66675 5.55758 1.66675C5.79092 1.66675 6.02425 1.71675 6.23258 1.81675C6.44925 1.91675 6.64092 2.06675 6.79092 2.28341L8.72425 5.00841C8.87425 5.21675 8.98258 5.40841 9.05758 5.59175C9.13258 5.76675 9.17425 5.94175 9.17425 6.10008C9.17425 6.30008 9.11592 6.50008 8.99925 6.69175C8.89092 6.88341 8.73258 7.08341 8.53258 7.28341L7.89925 7.94175C7.80758 8.03341 7.76592 8.14175 7.76592 8.27508C7.76592 8.34175 7.77425 8.40008 7.79092 8.46675C7.81592 8.53341 7.84092 8.58341 7.85758 8.63341C8.00759 8.90841 8.26592 9.26675 8.63258 9.70008C9.00758 10.1334 9.40758 10.5751 9.84092 11.0167C9.92425 11.1001 10.0159 11.1834 10.0993 11.2667C10.4326 11.5917 10.4409 12.1251 10.1076 12.4584Z"
                fill="inherit"
            />
            <path
                d="M19.2077 15.275C19.2077 15.5083 19.1661 15.75 19.0827 15.9833C19.0577 16.05 19.0327 16.1166 18.9994 16.1833C18.8577 16.4833 18.6744 16.7666 18.4327 17.0333C18.0244 17.4833 17.5744 17.8083 17.0661 18.0166C17.0577 18.0166 17.0494 18.025 17.0411 18.025C16.5494 18.225 16.0161 18.3333 15.4411 18.3333C14.5911 18.3333 13.6827 18.1333 12.7244 17.725C11.7661 17.3166 10.8077 16.7666 9.85775 16.075C9.53275 15.8333 9.20775 15.5916 8.89941 15.3333L11.6244 12.6083C11.8577 12.7833 12.0661 12.9166 12.2411 13.0083C12.2827 13.025 12.3327 13.05 12.3911 13.075C12.4577 13.1 12.5244 13.1083 12.5994 13.1083C12.7411 13.1083 12.8494 13.0583 12.9411 12.9666L13.5744 12.3416C13.7827 12.1333 13.9827 11.975 14.1744 11.875C14.3661 11.7583 14.5577 11.7 14.7661 11.7C14.9244 11.7 15.0911 11.7333 15.2744 11.8083C15.4577 11.8833 15.6494 11.9916 15.8577 12.1333L18.6161 14.0916C18.8327 14.2416 18.9827 14.4166 19.0744 14.625C19.1577 14.8333 19.2077 15.0416 19.2077 15.275Z"
                fill="inherit"
            />
        </svg>
    ),
    menu: (props: IconProps) => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="2.5"
                y="9.16675"
                width="15"
                height="1.66667"
                rx="0.833333"
                fill="white"
            />
            <g opacity="0.5">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.45241 3.33325C2.92641 3.33325 2.5 3.75966 2.5 4.28566C2.5 4.81166 2.92641 5.23807 3.45241 5.23807H8.94238C9.46839 5.23807 9.89479 4.81166 9.89479 4.28566C9.89479 3.75966 9.46839 3.33325 8.94238 3.33325H3.45241ZM11.0583 14.7623C10.5323 14.7623 10.1059 15.1887 10.1059 15.7147C10.1059 16.2407 10.5323 16.6671 11.0583 16.6671H16.5483C17.0743 16.6671 17.5007 16.2407 17.5007 15.7147C17.5007 15.1887 17.0743 14.7623 16.5483 14.7623H11.0583Z"
                    fill="white"
                />
            </g>
        </svg>
    ),
    chevronBack: (props: IconProps) => (
        <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.58594 11.125L8.17188 7.53907L4.58594 3.95314"
                stroke="inherit"
                stroke-width="1.19531"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    ),
    misssionOne: (props: IconProps) => (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M43.1198 21.4801L40.3998 18.3201C39.8798 17.7201 39.4598 16.6001 39.4598 15.8001V12.4001C39.4598 10.2801 37.7198 8.54012 35.5998 8.54012H32.1998C31.4198 8.54012 30.2798 8.12012 29.6798 7.60012L26.5198 4.88012C25.1398 3.70012 22.8798 3.70012 21.4798 4.88012L18.3398 7.62012C17.7398 8.12012 16.5998 8.54012 15.8198 8.54012H12.3598C10.2398 8.54012 8.49977 10.2801 8.49977 12.4001V15.8201C8.49977 16.6001 8.07977 17.7201 7.57977 18.3201L4.87977 21.5001C3.71977 22.8801 3.71977 25.1201 4.87977 26.5001L7.57977 29.6801C8.07977 30.2801 8.49977 31.4001 8.49977 32.1801V35.6001C8.49977 37.7201 10.2398 39.4601 12.3598 39.4601H15.8198C16.5998 39.4601 17.7398 39.8801 18.3398 40.4001L21.4998 43.1201C22.8798 44.3001 25.1398 44.3001 26.5398 43.1201L29.6998 40.4001C30.2998 39.8801 31.4198 39.4601 32.2198 39.4601H35.6198C37.7398 39.4601 39.4798 37.7201 39.4798 35.6001V32.2001C39.4798 31.4201 39.8998 30.2801 40.4198 29.6801L43.1398 26.5201C44.2998 25.1401 44.2998 22.8601 43.1198 21.4801ZM33.3598 24.0001L31.0198 31.1201C30.7198 32.3001 29.4598 33.2601 28.1798 33.2601H24.4798C23.8398 33.2601 22.9398 33.0401 22.5398 32.6401L19.5998 30.3401C19.5398 31.6201 18.9598 32.1601 17.5398 32.1601H16.5798C15.0998 32.1601 14.4998 31.5801 14.4998 30.1801V20.6201C14.4998 19.2201 15.0998 18.6401 16.5798 18.6401H17.5598C19.0398 18.6401 19.6398 19.2201 19.6398 20.6201V21.3401L23.5198 15.5801C23.9198 14.9601 24.9398 14.5201 25.7998 14.8601C26.7398 15.1801 27.3398 16.2201 27.1398 17.1401L26.6598 20.2601C26.6198 20.5401 26.6798 20.8001 26.8598 21.0001C27.0198 21.1801 27.2598 21.3001 27.5198 21.3001H31.4198C32.1798 21.3001 32.8198 21.6001 33.1998 22.1401C33.5398 22.6601 33.5998 23.3201 33.3598 24.0001Z"
                fill="white"
            />
        </svg>
    ),
};
