
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SvFlagProps = {
  className?: string;
};

const SvFlag = forwardRef<HTMLDivElement, SvFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#41479B"/>
    <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z"/>
    <g fill="#50AF69">
      <path d="M255.789 205.562c-21.295 0-38.621-17.325-38.621-38.621a38.642 38.642 0 0 1 9.08-24.877l1.687 1.422a36.43 36.43 0 0 0-8.561 23.455c0 20.077 16.335 36.414 36.414 36.414l.001 2.207z"/>
      <path d="M241.662 194.159c-.482.823-.721 1.953-.825 3.1a9.612 9.612 0 0 0-1.4-.851s-.759 2.674-.166 4.599c0 0-2.013.249-3.861 2.103 0 0 .637.45 1.73.919-1.835 1.432-2.401 2.848-2.401 2.848 10.83 5.415 16.02-2.138 16.246-2.477-2.653-7.569-9.323-10.241-9.323-10.241zm9.323 10.243l.022.055v-.087l-.022.032zm-19.325-17.461c-.707.518-1.321 1.383-1.83 2.312a8.745 8.745 0 0 0-.87-1.229s-1.618 1.976-1.821 3.817c0 0-1.788-.525-4.023.362 0 0 .372.612 1.122 1.408-2.07.536-3.065 1.523-3.065 1.523 7.149 8.525 14.287 4.055 14.601 3.852.534-7.355-4.114-12.045-4.114-12.045zm4.115 12.043c-.001.019 0 .035-.002.054l.032-.073-.03.019zm-10.32-21.48c-.772.163-1.598.647-2.359 1.22a7.987 7.987 0 0 0-.259-1.332s-2.061 1.024-2.91 2.461c0 0-1.274-1.095-3.438-1.194 0 0 .078.641.401 1.572-1.899-.327-3.082.115-3.082.115 2.713 9.652 10.232 8.625 10.567 8.574 3.158-5.84 1.08-11.416 1.08-11.416zm-1.083 11.417c-.008.014-.013.029-.022.044l.053-.049a.22.22 0 0 1-.031.005zm-1.373-22.172c-.733.047-1.586.367-2.403.774.056-.39.087-.786.073-1.187 0 0-2.09.639-3.183 1.782 0 0-.896-1.103-2.822-1.452 0 0-.076.566 0 1.412-1.634-.513-2.801-.274-2.801-.274.228 8.702 7.231 8.721 7.543 8.717 4.185-4.684 3.593-9.772 3.593-9.772zm-3.594 9.774l-.03.035.058-.035h-.028zm4.409-18.681c-.627-.15-1.426-.103-2.217.028.148-.312.277-.637.367-.977 0 0-1.919-.004-3.132.672 0 0-.466-1.158-1.991-1.948 0 0-.211.455-.366 1.185-1.238-.853-2.279-.953-2.279-.953-2.06 7.358 3.809 9.186 4.072 9.263 4.725-2.849 5.546-7.27 5.546-7.27zm-5.544 7.269l-.034.022.058-.014-.024-.008zm.898-18.101s-2.001 5.241 1.103 8.276c0 0 4.046-1.195 6.046-5.402l-1.702-.322-.874-2.621-2.897 1.288-1.676-1.219zm5.634-8.425s-3.135 4.652-.8 8.311c0 0 4.212-.248 7.113-3.893l-1.585-.698-.257-2.751-3.113.598-1.358-1.567zm31.409 66.977v-2.207c20.078 0 36.414-16.337 36.414-36.414 0-8.577-3.04-16.907-8.561-23.455l1.687-1.422a38.642 38.642 0 0 1 9.08 24.877c0 21.296-17.325 38.621-38.62 38.621z"/>
      <path d="M270.338 194.159c.482.823.721 1.953.825 3.1a9.612 9.612 0 0 1 1.4-.851s.759 2.674.165 4.599c0 0 2.013.249 3.861 2.103 0 0-.637.45-1.73.919 1.835 1.432 2.401 2.848 2.401 2.848-10.83 5.415-16.02-2.138-16.246-2.477 2.654-7.569 9.324-10.241 9.324-10.241zm-9.323 10.243l-.022.055v-.087l.022.032zm19.325-17.461c.707.518 1.321 1.383 1.829 2.312.253-.424.535-.839.87-1.229 0 0 1.618 1.976 1.821 3.817 0 0 1.788-.525 4.023.362 0 0-.372.612-1.122 1.408 2.07.536 3.065 1.523 3.065 1.523-7.149 8.525-14.287 4.055-14.601 3.852-.533-7.355 4.115-12.045 4.115-12.045z"/>
      <path d="M276.225 198.984c.001.019 0 .035.002.054l-.032-.073.03.019zm10.32-21.48c.772.163 1.598.647 2.359 1.22.051-.442.129-.887.259-1.332 0 0 2.061 1.024 2.91 2.461 0 0 1.274-1.095 3.438-1.194 0 0-.078.641-.401 1.572 1.899-.327 3.082.115 3.082.115-2.713 9.652-10.232 8.625-10.567 8.574-3.158-5.84-1.08-11.416-1.08-11.416zm1.083 11.417c.008.014.013.029.022.044l-.053-.049a.22.22 0 0 0 .031.005zm1.373-22.172c.733.047 1.586.367 2.403.774a6.696 6.696 0 0 1-.073-1.187s2.09.639 3.183 1.782c0 0 .896-1.103 2.822-1.452a7 7 0 0 0 0 1.412c1.634-.513 2.801-.274 2.801-.274-.228 8.702-7.231 8.721-7.543 8.717-4.185-4.684-3.593-9.772-3.593-9.772zm3.594 9.774l.03.035-.059-.035h.029zm-4.409-18.681c.627-.15 1.426-.103 2.217.028a5.672 5.672 0 0 1-.367-.977s1.919-.004 3.132.672c0 0 .466-1.158 1.991-1.948 0 0 .211.455.366 1.185 1.238-.853 2.279-.953 2.279-.953 2.06 7.358-3.809 9.186-4.072 9.263-4.725-2.849-5.546-7.27-5.546-7.27zm5.544 7.269l.034.022-.058-.014.024-.008zm-.898-18.101s2.001 5.241-1.103 8.276c0 0-4.046-1.195-6.046-5.402l1.702-.322.874-2.621 2.897 1.288 1.676-1.219zm-5.634-8.425s3.135 4.652.8 8.311c0 0-4.212-.248-7.113-3.893l1.585-.698.257-2.751 3.113.598 1.358-1.567z"/>
    </g>
    <path d="M256 182.345l-3.412 5.118a2.202 2.202 0 0 0 .276 2.781L256 193.38l3.136-3.136a2.205 2.205 0 0 0 .276-2.781L256 182.345z" fill="#41479B"/>
    <path d="M257.454 187.463L256 182.345l-1.454 5.118c-.248.874-.199 2.038.117 2.781L256 193.38l1.336-3.136c.317-.744.367-1.907.118-2.781z" fill="#F5F5F5"/>
    <path d="M256 136.552v-13.793s-5.241 7.54-4.414 18.574m-19.092-4.734c-7.582 16.456.195 29.996 1.827 32.545.043.068 10.827-17.376 10.827-17.376l-12.654-15.169" fill="#41479B"/>
    <path d="M240.477 159.314c-1.196-3.725-1.369-8.075.067-13.066l-4.692-5.624c-3.855 10.388-2.26 18.058 1.599 23.562l3.026-4.872z" fill="#F5F5F5"/>
    <path d="M244.967 152.687c-.329 0-.654-.147-.872-.427l-13.837-17.791a1.102 1.102 0 1 1 1.741-1.353l13.837 17.791a1.1 1.1 0 0 1-.869 1.78z" fill="#FFE15A"/>
    <path d="M222.897 153.698c-4.414 44.138 30.897 33.103 33.103 28.69l-22.069-11.034 4.414-8.828-15.448-8.828" fill="#41479B"/>
    <path d="M233.567 158.777l-6.151-3.69c-1.384 26.228 12.622 30.596 22.953 29.294-8.375-1.124-16.743-7.308-16.802-25.604z" fill="#F5F5F5"/>
    <path d="M238.343 163.627c-.2 0-.402-.054-.584-.168l-17.654-11.032a1.102 1.102 0 0 1-.35-1.519 1.099 1.099 0 0 1 1.521-.351l17.654 11.032a1.102 1.102 0 0 1-.587 2.038z" fill="#FFE15A"/>
    <path d="M279.506 136.555c7.582 16.456-.195 29.996-1.827 32.545-.043.068-10.827-17.376-10.827-17.376l12.654-15.169" fill="#41479B"/>
    <path d="M271.523 159.27c1.196-3.725 1.369-8.075-.067-13.066l4.692-5.624c3.855 10.388 2.26 18.058-1.599 23.562a4950.18 4950.18 0 0 1-3.026-4.872z" fill="#F5F5F5"/>
    <path d="M267.033 152.644a1.1 1.1 0 0 1-.869-1.78l13.837-17.791a1.104 1.104 0 0 1 1.548-.194 1.1 1.1 0 0 1 .193 1.547l-13.837 17.791a1.098 1.098 0 0 1-.872.427z" fill="#FFE15A"/>
    <path d="M289.103 153.655c4.414 44.138-30.897 33.103-33.103 28.69l22.069-11.034-4.414-8.828 15.448-8.828" fill="#41479B"/>
    <path d="M278.433 158.733l6.151-3.69c1.384 26.228-12.622 30.596-22.953 29.294 8.375-1.124 16.743-7.307 16.802-25.604z" fill="#F5F5F5"/>
    <path d="M273.657 163.584a1.103 1.103 0 0 1-.587-2.039l17.654-11.032a1.099 1.099 0 0 1 1.521.351 1.102 1.102 0 0 1-.35 1.519l-17.654 11.032a1.088 1.088 0 0 1-.584.169z" fill="#FFE15A"/>
    <circle fill="#FFE6E6" cx="256" cy="155.862" r="8.828"/>
    <circle fill="#F5F5F5" cx="256" cy="155.862" r="4.414"/>
    <path d="M256 170.207c-.61 0-1.103-.493-1.103-1.103v-13.241a1.102 1.102 0 1 1 2.206 0v13.241c0 .61-.493 1.103-1.103 1.103z" fill="#FFE15A"/>
    <path fill="#5AA0E6" d="M286.161 182.161h-59.127l6.897-13.124h44.322z"/>
    <path d="M257.795 171.495h15.377l-4.783-4.783a2.048 2.048 0 0 0-.801-.495l-1.665-.555c-.6-.2-1.259-.111-1.785.239l-5.316 3.544-1.027 2.05z" fill="#FFB750"/>
    <path d="M252.567 172.322h18.353l-5.709-5.709a2.445 2.445 0 0 0-.957-.591l-1.987-.662a2.446 2.446 0 0 0-2.131.286l-6.345 4.231-1.224 2.445z" fill="#FFC455"/>
    <path d="M246.183 173.241h22.163l-6.894-6.894a2.962 2.962 0 0 0-1.155-.714l-2.4-.8a2.957 2.957 0 0 0-2.573.344l-7.662 5.108-1.479 2.956z" fill="#FFCD55"/>
    <path d="M239.865 174.069h25.376l-7.894-7.894a3.39 3.39 0 0 0-1.323-.818l-2.748-.916a3.385 3.385 0 0 0-2.947.395l-8.774 5.849-1.69 3.384z" fill="#FFD25A"/>
    <path d="M229.517 175.724h33.103l-10.297-10.297a4.404 4.404 0 0 0-1.726-1.066l-3.584-1.195a4.414 4.414 0 0 0-3.844.515l-11.445 7.629-2.207 4.414z" fill="#FFE15A"/>
    <g fill="#FF4B55">
      <path d="M258.382 157.842h-4.771l1.099-4.607h1.658c.537 0 1.004.369 1.129.892l.885 3.715z"/>
      <path d="M258.108 158.582h-4.284a.634.634 0 0 1-.634-.634v-.212c0-.351.285-.634.634-.634h4.284c.351 0 .634.285.634.634v.212a.635.635 0 0 1-.634.634zm-2.832-3.25l-1.071-.271a.474.474 0 0 1-.27-.734l.775-1.092.566 2.097z"/>
    </g>
    <path d="M250.495 144.526l-.157 1.216c1.715-1.041 3.607-1.665 5.662-1.665 2.053.002 3.946.622 5.662 1.665l-.157-1.216c-1.706-.89-3.542-1.402-5.505-1.4-1.962-.002-3.798.509-5.505 1.4z" fill="#41479B"/>
    <path d="M250.563 143.998l-.157 1.216c1.696-1.043 3.565-1.668 5.593-1.671 2.028.002 3.897.627 5.593 1.671l-.157-1.216c-1.687-.897-3.499-1.405-5.437-1.406-1.936 0-3.748.511-5.435 1.406z" fill="#5AA0E6"/>
    <path d="M250.626 143.509l-.157 1.216c1.679-1.046 3.527-1.676 5.53-1.675 2.004 0 3.851.629 5.53 1.675l-.157-1.216c-1.668-.896-3.459-1.41-5.374-1.411-1.911-.001-3.702.514-5.372 1.411z" fill="#9BC800"/>
    <path d="M250.699 142.95l-.157 1.216c1.66-1.049 3.482-1.681 5.459-1.681 1.976.002 3.799.63 5.459 1.681l-.157-1.216c-1.649-.9-3.414-1.416-5.301-1.417-1.889.002-3.654.517-5.303 1.417z" fill="#FFE14E"/>
    <path d="M250.77 142.401l-.157 1.216c1.641-1.053 3.437-1.685 5.387-1.686 1.95.002 3.747.632 5.387 1.686l-.157-1.216c-1.629-.903-3.37-1.421-5.23-1.422-1.86.002-3.602.518-5.23 1.422z" fill="#FFB14E"/>
    <path d="M250.799 142.167l-.109.852c1.619-1.054 3.391-1.693 5.311-1.693 1.92-.001 3.691.637 5.311 1.693l-.109-.852c-1.62-.904-3.351-1.423-5.201-1.425-1.851-.002-3.583.52-5.203 1.425z" fill="#FF4B55"/>
    <g fill="#FFE15A">
      <path d="M286.897 183.448h-61.793a1.104 1.104 0 0 1-.918-1.715l30.897-46.345c.409-.612 1.427-.612 1.836 0l30.897 46.345c.225.339.247.774.055 1.133a1.107 1.107 0 0 1-.974.582zm-59.732-2.207h57.671L256 137.99l-28.835 43.251zM256 126.069c-.61 0-1.103-.493-1.103-1.103v-4.414a1.102 1.102 0 1 1 2.206 0v4.414c0 .61-.493 1.103-1.103 1.103z"/>
      <path d="M258.207 126.069h-4.414a1.102 1.102 0 1 1 0-2.206h4.414a1.102 1.102 0 1 1 0 2.206z"/>
    </g>
    <g fill="#41479B">
      <path d="M256 205.517c-.079 0-.161-.009-.239-.025-1.08-.242-4.684-1.106-5.747-2.159a3.456 3.456 0 0 1-.019-4.879 3.424 3.424 0 0 1 2.435-1.017h.012c.917 0 1.779.355 2.43 1.002 1.063 1.056 1.954 4.651 2.202 5.728.085.369-.025.757-.292 1.026a1.104 1.104 0 0 1-.782.324zm-3.558-5.875c-.294.097-.647.131-.882.366a1.244 1.244 0 0 0 .008 1.757c.267.26 1.46.712 2.89 1.119-.418-1.425-.877-2.614-1.141-2.881l.777-.782-.778.782a1.226 1.226 0 0 0-.874-.361z"/>
      <path d="M256 205.517a1.102 1.102 0 0 1-1.075-1.352c.248-1.078 1.14-4.672 2.202-5.728.654-.649 1.433-.943 2.442-1.002a3.42 3.42 0 0 1 2.434 1.017 3.452 3.452 0 0 1-.017 4.877c-1.064 1.056-4.668 1.92-5.748 2.162a1.12 1.12 0 0 1-.238.026zm1.906-6.297l.777.782c-.264.267-.723 1.457-1.141 2.881 1.43-.407 2.623-.857 2.891-1.121a1.243 1.243 0 0 0 .006-1.754 1.226 1.226 0 0 0-.876-.366h-.004c-.33 0-.64.127-.874.36l-.779-.782zm0 0h.022-.022z"/>
      <path d="M251.586 212.138c-.61 0-1.103-.493-1.103-1.103 0-5.038 4.819-7.505 5.024-7.608a1.105 1.105 0 0 1 .991 1.972c-.039.02-3.807 1.976-3.807 5.635a1.104 1.104 0 0 1-1.105 1.104z"/>
      <path d="M260.414 212.138c-.61 0-1.103-.493-1.103-1.103 0-3.659-3.768-5.617-3.807-5.635a1.105 1.105 0 0 1-.487-1.481 1.102 1.102 0 0 1 1.478-.491c.205.104 5.024 2.569 5.024 7.608a1.105 1.105 0 0 1-1.105 1.102z"/>
    </g>
  </g>
        </svg>
      </div>
    );
  }
);

SvFlag.displayName = "SvFlag";

export default SvFlag;
