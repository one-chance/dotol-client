import { Svg } from '@components/common';

export const search = (color: string) => (
  <Svg>
    <path
      clipRule="evenodd"
      d="M10.8838 15.2676C13.8572 15.2676 16.2676 12.8572 16.2676 9.88379C16.2676 6.91041 13.8572 4.5 10.8838 4.5C7.91041 4.5 5.5 6.91041 5.5 9.88379C5.5 12.8572 7.91041 15.2676 10.8838 15.2676ZM10.8838 16.7676C14.6856 16.7676 17.7676 13.6856 17.7676 9.88379C17.7676 6.08198 14.6856 3 10.8838 3C7.08198 3 4 6.08198 4 9.88379C4 13.6856 7.08198 16.7676 10.8838 16.7676Z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M14.5913 14.7835C14.8841 14.4906 15.359 14.4906 15.6519 14.7835L20.7775 19.9091C21.0704 20.202 21.0704 20.6769 20.7775 20.9698C20.4846 21.2626 20.0097 21.2626 19.7168 20.9698L14.5913 15.8442C14.2984 15.5513 14.2984 15.0764 14.5913 14.7835Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const arrowDown = (color: string) => (
  <Svg height={16} width={16}>
    <path
      clipRule="evenodd"
      d="M2.64645 6.47994C2.84171 6.28468 3.15829 6.28468 3.35355 6.47994L8 11.1264L12.6464 6.47994C12.8417 6.28468 13.1583 6.28468 13.3536 6.47994C13.5488 6.67521 13.5488 6.99179 13.3536 7.18705L8.35355 12.1871C8.15829 12.3823 7.84171 12.3823 7.64645 12.1871L2.64645 7.18705C2.45119 6.99179 2.45119 6.6752 2.64645 6.47994Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const arrowUp = (color: string) => (
  <Svg height={16} width={16}>
    <path
      clipRule="evenodd"
      d="M2.64645 9.52055C2.84171 9.71581 3.15829 9.71581 3.35355 9.52055L8 4.8741L12.6464 9.52055C12.8417 9.71581 13.1583 9.71581 13.3536 9.52055C13.5488 9.32528 13.5488 9.0087 13.3536 8.81344L8.35355 3.81344C8.15829 3.61818 7.84171 3.61818 7.64645 3.81344L2.64645 8.81344C2.45118 9.0087 2.45118 9.32528 2.64645 9.52055Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const arrowLeft = (color: string) => (
  <Svg height={24} width={24}>
    <path
      clipRule="evenodd"
      d="M15.75 4.192a.75.75 0 01.058 1.059l-6.054 6.748 6.054 6.75a.75.75 0 01-1.116 1L8.189 12.5a.75.75 0 010-1.001l6.503-7.25a.75.75 0 011.059-.057z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const arrowRight = (color: string) => (
  <Svg height={24} width={24}>
    <path
      clipRule="evenodd"
      d="M8.25 19.808a.75.75 0 01-.058-1.059l6.053-6.748-6.053-6.75a.75.75 0 011.116-1l6.503 7.249a.75.75 0 010 1.001l-6.503 7.25a.75.75 0 01-1.059.057z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const menu = (color: string) => (
  <Svg height={24} width={24}>
    <path
      clipRule="evenodd"
      d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zM3 11.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 17.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const close = (color: string) => (
  <Svg height={24} width={24}>
    <path
      clipRule="evenodd"
      d="M5.53 4.47a.75.75 0 00-1.06 1.06L10.94 12l-6.47 6.47a.75.75 0 101.06 1.06L12 13.06l6.47 6.47a.75.75 0 101.06-1.06L13.06 12l6.47-6.47a.75.75 0 00-1.06-1.06L12 10.94 5.53 4.47z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const check = (color: string) => (
  <Svg height={16} width={16}>
    <rect
      fill="#fff"
      height="15"
      rx="3.5"
      stroke="#D3D8DD"
      width="15"
      x=".5"
      y=".5"
    />
  </Svg>
);

export const checked = (color: string) => (
  <Svg height={16} width={16}>
    <rect
      fill="#6877FF"
      height="15"
      rx="3.5"
      stroke="#6877FF"
      width="15"
      x=".5"
      y=".5"
    />
    <path
      d="M5 8l2 2 4-4"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
