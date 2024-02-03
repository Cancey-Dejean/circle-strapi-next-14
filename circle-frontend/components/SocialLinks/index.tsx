import Link from "next/link"

type Props = {}

export default function SocialLinks({}: Props) {
  return (
    <div className="social">
      <Link
        href="https://www.facebook.com/halolabteam/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1194 13.32H24.9994V10.14C24.0891 10.0454 23.1745 9.99865 22.2594 10C19.5394 10 17.6794 11.66 17.6794 14.7V17.32H14.6094V20.88H17.6794V30H21.3594V20.88H24.4194L24.8794 17.32H21.3594V15.05C21.3594 14 21.6394 13.32 23.1194 13.32Z"
            fill="white"
          ></path>
        </svg>
      </Link>

      <Link
        href="https://www.behance.net/halolab"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.07 14.3495H23V15.7595H28.09L28.07 14.3495ZM27 24.0495C26.6154 24.3044 26.1612 24.4337 25.7 24.4195C25.3947 24.4514 25.0862 24.4198 24.7937 24.3269C24.5011 24.234 24.2309 24.0817 24 23.8795C23.573 23.3954 23.3507 22.7644 23.38 22.1195H30C30.0477 21.4481 29.9904 20.7733 29.83 20.1195C29.6749 19.4976 29.4034 18.9106 29.03 18.3895C28.6541 17.8842 28.1686 17.4705 27.61 17.1795C26.9884 16.8731 26.3029 16.7188 25.61 16.7295C24.9583 16.7248 24.3123 16.8506 23.71 17.0995C23.1585 17.332 22.6588 17.672 22.24 18.0995C21.8224 18.5357 21.499 19.0531 21.29 19.6195C21.0657 20.2311 20.9539 20.8782 20.96 21.5295C20.9497 22.1902 21.0581 22.8472 21.28 23.4695C21.4685 24.0331 21.7677 24.5533 22.16 24.9995C22.5659 25.4377 23.0648 25.7794 23.62 25.9995C24.2391 26.2354 24.8976 26.3508 25.56 26.3395C26.4894 26.3685 27.407 26.1252 28.2 25.6395C29.0009 25.0704 29.5775 24.2391 29.83 23.2895H27.62C27.5017 23.6037 27.284 23.8706 27 24.0495ZM23.57 19.9295C23.6478 19.6802 23.777 19.45 23.9493 19.2536C24.1215 19.0573 24.3329 18.8992 24.57 18.7895C24.884 18.6482 25.2258 18.5799 25.57 18.5895C25.8186 18.5683 26.0689 18.6011 26.3036 18.6857C26.5384 18.7703 26.7521 18.9046 26.93 19.0795C27.2698 19.4955 27.4878 19.9973 27.56 20.5295H23.41C23.4262 20.3263 23.463 20.1253 23.52 19.9295H23.57ZM18.28 19.4495C18.789 19.2376 19.2312 18.8921 19.56 18.4495C19.8622 17.9796 20.0124 17.4279 19.99 16.8695C20.0096 16.3604 19.9103 15.8537 19.7 15.3895C19.5233 14.9875 19.2397 14.6416 18.88 14.3895C18.4987 14.1275 18.0656 13.9502 17.61 13.8695C17.0708 13.7565 16.5209 13.7028 15.97 13.7095H10V26.2895H16.1C16.6567 26.29 17.2112 26.2194 17.75 26.0795C18.2607 25.9474 18.7446 25.7275 19.18 25.4295C19.6017 25.1373 19.9452 24.7458 20.18 24.2895C20.4399 23.7793 20.5672 23.2119 20.55 22.6395C20.5689 21.9303 20.37 21.2323 19.98 20.6395C19.5606 20.0435 18.9385 19.6205 18.23 19.4495H18.28ZM12.77 15.8595H15.36C15.5979 15.8593 15.8355 15.8793 16.07 15.9195C16.2859 15.9516 16.4933 16.0263 16.68 16.1395C16.8603 16.2416 17.0065 16.3947 17.1 16.5795C17.2158 16.8013 17.271 17.0496 17.26 17.2995C17.2786 17.5148 17.2457 17.7314 17.164 17.9314C17.0823 18.1313 16.9541 18.309 16.79 18.4495C16.4321 18.6956 16.0039 18.8184 15.57 18.7995H12.77V15.8595ZM17.61 23.2995C17.5073 23.5034 17.3519 23.676 17.16 23.7995C16.9603 23.9238 16.7403 24.0118 16.51 24.0595C16.2541 24.1168 15.9922 24.1437 15.73 24.1395H12.73V20.6895H15.73C16.2448 20.667 16.7532 20.8108 17.18 21.0995C17.3728 21.2726 17.5222 21.4886 17.616 21.7301C17.7098 21.9716 17.7454 22.2317 17.72 22.4895C17.747 22.7644 17.7094 23.0418 17.61 23.2995V23.2995Z"
            fill="white"
          ></path>
        </svg>
      </Link>

      <Link
        href="https://www.linkedin.com/company/halolabteam/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8067 14.0706C15.8067 15.0724 15.0527 15.8739 13.8419 15.8739H13.8198C12.654 15.8739 11.9004 15.0724 11.9004 14.0706C11.9004 13.0477 12.677 12.2686 13.8648 12.2686C15.0527 12.2686 15.7842 13.0477 15.8067 14.0706ZM15.5789 17.298V27.7309H12.1066V17.298H15.5789ZM28.0999 27.7314L28.1 21.7495C28.1 18.545 26.387 17.0536 24.1021 17.0536C22.2585 17.0536 21.4331 18.0662 20.9722 18.7766V17.2988H17.4995C17.5453 18.2778 17.4995 27.7317 17.4995 27.7317H20.9722V21.9051C20.9722 21.5933 20.9948 21.2823 21.0866 21.059C21.3375 20.4361 21.9089 19.7912 22.8682 19.7912C24.1252 19.7912 24.6277 20.7479 24.6277 22.1498V27.7314H28.0999Z"
            fill="white"
          ></path>
        </svg>
      </Link>

      <Link
        href="https://www.instagram.com/halolabteam/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.34 13.46C25.1027 13.46 24.8707 13.5304 24.6733 13.6622C24.476 13.7941 24.3222 13.9815 24.2313 14.2008C24.1405 14.4201 24.1168 14.6613 24.1631 14.8941C24.2094 15.1269 24.3236 15.3407 24.4915 15.5085C24.6593 15.6764 24.8731 15.7906 25.1059 15.8369C25.3387 15.8832 25.5799 15.8595 25.7992 15.7687C26.0185 15.6778 26.2059 15.524 26.3378 15.3267C26.4696 15.1293 26.54 14.8973 26.54 14.66C26.54 14.3417 26.4136 14.0365 26.1885 13.8115C25.9635 13.5864 25.6583 13.46 25.34 13.46V13.46ZM29.94 15.88C29.9206 15.0503 29.7652 14.2294 29.48 13.45C29.2257 12.7831 28.83 12.1793 28.32 11.68C27.8248 11.1674 27.2196 10.7742 26.55 10.53C25.7727 10.2362 24.9508 10.0772 24.12 10.06C23.06 10 22.72 10 20 10C17.28 10 16.94 10 15.88 10.06C15.0492 10.0772 14.2273 10.2362 13.45 10.53C12.7817 10.7766 12.1769 11.1696 11.68 11.68C11.1674 12.1752 10.7742 12.7804 10.53 13.45C10.2362 14.2273 10.0772 15.0492 10.06 15.88C10 16.94 10 17.28 10 20C10 22.72 10 23.06 10.06 24.12C10.0772 24.9508 10.2362 25.7727 10.53 26.55C10.7742 27.2196 11.1674 27.8248 11.68 28.32C12.1769 28.8304 12.7817 29.2234 13.45 29.47C14.2273 29.7638 15.0492 29.9228 15.88 29.94C16.94 30 17.28 30 20 30C22.72 30 23.06 30 24.12 29.94C24.9508 29.9228 25.7727 29.7638 26.55 29.47C27.2196 29.2258 27.8248 28.8326 28.32 28.32C28.8322 27.8226 29.2283 27.2182 29.48 26.55C29.7652 25.7706 29.9206 24.9497 29.94 24.12C29.94 23.06 30 22.72 30 20C30 17.28 30 16.94 29.94 15.88V15.88ZM28.14 24C28.1327 24.6348 28.0178 25.2637 27.8 25.86C27.6403 26.2952 27.3839 26.6884 27.05 27.01C26.7256 27.3405 26.3332 27.5964 25.9 27.76C25.3037 27.9778 24.6748 28.0927 24.04 28.1C23.04 28.15 22.67 28.16 20.04 28.16C17.41 28.16 17.04 28.16 16.04 28.1C15.3809 28.1123 14.7246 28.0109 14.1 27.8C13.6858 27.6281 13.3114 27.3728 13 27.05C12.6681 26.7287 12.4148 26.3352 12.26 25.9C12.0159 25.2952 11.8804 24.6519 11.86 24C11.86 23 11.8 22.63 11.8 20C11.8 17.37 11.8 17 11.86 16C11.8645 15.3511 11.983 14.7079 12.21 14.1C12.386 13.6779 12.6563 13.3017 13 13C13.3038 12.6562 13.6793 12.3831 14.1 12.2C14.7096 11.98 15.352 11.8651 16 11.86C17 11.86 17.37 11.8 20 11.8C22.63 11.8 23 11.8 24 11.86C24.6348 11.8673 25.2637 11.9822 25.86 12.2C26.3144 12.3687 26.7223 12.6428 27.05 13C27.3777 13.3072 27.6338 13.6827 27.8 14.1C28.0223 14.7089 28.1373 15.3518 28.14 16C28.19 17 28.2 17.37 28.2 20C28.2 22.63 28.19 23 28.14 24ZM20 14.87C18.9858 14.872 17.995 15.1745 17.1527 15.7394C16.3103 16.3043 15.6544 17.1062 15.2676 18.0438C14.8809 18.9813 14.7807 20.0125 14.9798 21.0069C15.1789 22.0014 15.6682 22.9145 16.3861 23.631C17.1039 24.3474 18.018 24.835 19.0129 25.0321C20.0077 25.2293 21.0387 25.1271 21.9755 24.7385C22.9123 24.35 23.7129 23.6924 24.2761 22.849C24.8394 22.0056 25.14 21.0142 25.14 20C25.1413 19.3251 25.0092 18.6566 24.7512 18.033C24.4933 17.4093 24.1146 16.8428 23.6369 16.3661C23.1592 15.8893 22.5919 15.5117 21.9678 15.2549C21.3436 14.9982 20.6749 14.8674 20 14.87V14.87ZM20 23.33C19.3414 23.33 18.6976 23.1347 18.15 22.7688C17.6023 22.4029 17.1755 21.8828 16.9235 21.2743C16.6714 20.6659 16.6055 19.9963 16.734 19.3503C16.8625 18.7044 17.1796 18.111 17.6453 17.6453C18.111 17.1796 18.7044 16.8625 19.3503 16.734C19.9963 16.6055 20.6659 16.6714 21.2743 16.9235C21.8828 17.1755 22.4029 17.6023 22.7688 18.15C23.1347 18.6976 23.33 19.3414 23.33 20C23.33 20.4373 23.2439 20.8703 23.0765 21.2743C22.9092 21.6784 22.6639 22.0454 22.3547 22.3547C22.0454 22.6639 21.6784 22.9092 21.2743 23.0765C20.8703 23.2439 20.4373 23.33 20 23.33V23.33Z"
            fill="white"
          ></path>
        </svg>
      </Link>

      <Link
        href="https://dribbble.com/halolab"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10C18.0222 10 16.0888 10.5865 14.4443 11.6853C12.7998 12.7841 11.5181 14.3459 10.7612 16.1732C10.0043 18.0004 9.8063 20.0111 10.1922 21.9509C10.578 23.8907 11.5304 25.6725 12.9289 27.0711C14.3275 28.4696 16.1093 29.422 18.0491 29.8079C19.9889 30.1937 21.9996 29.9957 23.8268 29.2388C25.6541 28.4819 27.2159 27.2002 28.3147 25.5557C29.4135 23.9112 30 21.9778 30 20C30 18.6868 29.7413 17.3864 29.2388 16.1732C28.7363 14.9599 27.9997 13.8575 27.0711 12.9289C26.1425 12.0003 25.0401 11.2638 23.8268 10.7612C22.6136 10.2587 21.3132 10 20 10V10ZM20 12C22.0547 11.9992 24.0298 12.7949 25.51 14.22C23.982 15.1162 22.3629 15.847 20.68 16.4C19.8425 14.9568 18.8823 13.5884 17.81 12.31C18.522 12.105 19.2591 12.0007 20 12V12ZM15.89 13.15C16.9377 14.3485 17.878 15.6368 18.7 17C16.7371 17.4874 14.7225 17.7359 12.7 17.74H12.34C12.9072 15.8196 14.1739 14.1818 15.89 13.15V13.15ZM14 25.31C12.6988 23.8488 11.9861 21.9566 12 20C12 19.9 12 19.8 12 19.71H12.68C15.0474 19.6888 17.4014 19.3525 19.68 18.71C20 19.32 20.3 19.95 20.59 20.6C19.0315 21.1494 17.58 21.9648 16.3 23.01L16 23.25C15.2871 23.8902 14.6189 24.5785 14 25.31V25.31ZM20 28C18.4061 28.0035 16.8482 27.5261 15.53 26.63C16.0168 26.0716 16.5378 25.5439 17.09 25.05L17.41 24.78C18.5932 23.7849 19.949 23.0155 21.41 22.51C22.0113 24.136 22.4795 25.8082 22.81 27.51C21.9098 27.8387 20.9583 28.0046 20 28V28ZM24.63 26.51C24.3028 24.9966 23.8752 23.5066 23.35 22.05H23.69C23.7294 22.0403 23.7706 22.0403 23.81 22.05H23.92H24.02H24.5C25.5524 22.053 26.5968 22.2322 27.59 22.58C27.0443 24.1704 26.0079 25.5464 24.63 26.51V26.51ZM24.5 20C24.29 20 24.08 20 23.88 20C23.7505 19.9837 23.6195 19.9837 23.49 20C23.2182 20.0167 22.9477 20.0501 22.68 20.1H22.58C22.29 19.43 21.99 18.78 21.66 18.1C23.4506 17.4851 25.1704 16.6805 26.79 15.7C27.5934 16.9894 28.0131 18.4809 28 20C28 20.17 28 20.34 28 20.51C26.8667 20.1602 25.686 19.9882 24.5 20V20Z"
            fill="white"
          ></path>
        </svg>
      </Link>
    </div>
  )
}
