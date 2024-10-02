
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type JeFlagProps = {
  className?: string;
};

const JeFlag = forwardRef<HTMLDivElement, JeFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#F5F5F5"/>
    <path d="M512 9.103a8.829 8.829 0 0 0-8.828-8.828h-23.389L256 146.893 32.216.276H8.828A8.828 8.828 0 0 0 0 9.103v12.279L223.784 168 0 314.617v12.279a8.829 8.829 0 0 0 8.828 8.828h23.389L256 189.107l223.784 146.617h23.389a8.829 8.829 0 0 0 8.828-8.828v-12.279L288.216 168 512 21.383V9.103z" fill="#FF4B55"/>
    <path d="M282.557 38.86s-2.795-4.193-6.988-1.398c0 0 4.849 3.495 1.572 7.164-3.467 3.883-8.233.085-8.532-2.698a2.455 2.455 0 0 0 2.276-2.444 2.462 2.462 0 1 0-4.926 0c0 1.062.676 1.959 1.618 2.305-.601 2.382-6.849 4.205-8.65.26-2.028-4.441 1.18-8.212 5.504-7.688 0 0-.83-5.503-6.682-3.189 0 0 2.446-6.29-1.747-10.483-4.193 4.193-1.747 10.483-1.747 10.483-5.853-2.315-6.682 3.189-6.682 3.189 4.324-.524 7.531 3.245 5.504 7.688-1.801 3.945-8.049 2.122-8.65-.26a2.455 2.455 0 0 0 1.618-2.305 2.462 2.462 0 1 0-4.926 0 2.455 2.455 0 0 0 2.276 2.444c-.299 2.783-5.066 6.581-8.532 2.698-3.276-3.669 1.572-7.164 1.572-7.164-4.193-2.795-6.988 1.398-6.988 1.398-1.398-5.591-6.988-4.193-6.988-4.193 5.591 6.988 9.702 21.404 9.702 21.404h47.687s4.11-14.415 9.702-21.404c-.005 0-5.596-1.398-6.993 4.193z" fill="#FFE15A"/>
    <path d="M279.843 56.071A71.719 71.719 0 0 0 256 51.993a71.719 71.719 0 0 0-23.843 4.078C219.65 110.87 256 125.517 256 125.517s36.35-14.647 23.843-69.446z" fill="#FF4B55"/>
    <g fill="#82AFFF">
      <path d="M238.561 75.567s-1.146-.216-2.143.582c0 0-.349-1.378 1.444-1.71 1.795-.334.699 1.128.699 1.128zm-1.38-1.743s-.908-.732-2.163-.5c0 0 .344-1.379 2.082-.824 1.738.554.081 1.324.081 1.324z"/>
      <path d="M237.932 74.538s-1.252-.216-2.342.582c0 0-.381-1.378 1.579-1.71 1.96-.333.763 1.128.763 1.128zm21.691 3.661s-1.165.055-1.95 1.062c0 0-.658-1.26 1.01-1.998 1.667-.739.94.936.94.936zm-1.709-1.502s-1.053-.502-2.22.014c0 0 .015-1.422 1.834-1.284 1.819.138.386 1.27.386 1.27z"/>
      <path d="M258.773 77.343s-1.269.079-2.144 1.107c0 0-.69-1.252 1.141-2.029 1.831-.777 1.003.922 1.003.922zm14.158 1.576s-.436 0-1.217.735c0 0-.559-1.25 1.087-1.864 1.648-.614.13 1.129.13 1.129zm-.836-1.717s-.983-.544-2.135-.116c0 0 .097-1.366 1.838-1.129 1.741.239.297 1.245.297 1.245z"/>
      <path d="M272.883 77.873s-1.225.003-2.125.94c0 0-.59-1.245 1.215-1.886 1.805-.64.91.946.91.946zm-36.239-10.954s-1.053-.7-2.387-.329c0 0 .238-1.519 2.17-1.091 1.933.428.217 1.42.217 1.42zm-.087-2.622s-.68-1.069-2.131-1.163c0 0 .939-1.441 2.588-.335 1.65 1.104-.457 1.498-.457 1.498z"/>
      <path d="M236.563 65.689s-1.11-.82-2.577-.518c0 0 .33-1.603 2.408-1.011 2.079.594.169 1.529.169 1.529z"/>
    </g>
    <path d="M269.568 70.485c1.844.05 4.035-.681 4.384-2.591.401-2.195-1.479-3.305-4.002-3.206-1.842.073-6.507 1.131-9.848 1.013-3.305-.116-3.395-3.386 1.611-3.039 7.424.515 8.603-.448 8.603-.448-3.986.747-5.58-.648-9.815-.648-4.235 0-5.048 2.933-3.338 4.534 1.916 1.794 8.868.598 10.712.249 1.844-.349 4.182-.367 4.367.93.165 1.163-2.923 1.1-5.111 1.016-3.482-.134-8.55.811-13.058 1.044-3.756.194-4.279-.865-5.134-1.95.2-.361.314-.764.314-1.19 0-.215-.034-.423-.088-.625.284-.311.582-.809.718-1.618 0 0-.961-.169-1.687.198a3.56 3.56 0 0 0-2.206-.746c-.854 0-1.624.287-2.206.746-.726-.366-1.687-.198-1.687-.198.137.81.435 1.306.718 1.618a2.394 2.394 0 0 0-.088.625c0 .782.376 1.489.983 1.996.292.245.51.567.584.941l.105.531a.78.78 0 0 0 .391.526c-3.096-.319-4.562-2.265-5.314-3.347-.849-1.22-1.378-3.919-2.674-4.218l-.764 4.07s1.637 3.786 4.683 5.331c3.438 1.743 4.086 1.794 5.215 2.292.132.598-2.126.963-4.418.499-1.6-.324-3.756-2.648-4.984-2.482l1.431 3.179c3.886 2.458 7.283 2.51 10.197 1.993 2.059-.365 2.842-2.042 2.978-2.76.841-.156 1.757-.33 4.595-1.027 1.188-.292 2.557-.446 3.919-.51.384.876 1.262 1.998 4.285 2.104 0 0 .73 1.163-1.76.93-2.492-.233-3.13-1.009-4.593-.843l1.304 3.102s3.189-1.096 7.108-.697c0 0 .73.2 1.163-.431.431-.631.233-.996-.167-1.561-.224-.318-.354-1.348-.424-2.191 1.436.361 5.841-.533 7.433-.399 1.594.132 1.827 1.993 1.461 2.624-.365.631-3.703.092-3.703.092l1.121 3.064s.337-.162 1.187-.963c.692-.651 3.521-.431 3.521-.93v-5.676a.461.461 0 0 0-.502-.456c-6.242.544-7.52-.497-7.52-.497z" fill="#FFE15A"/>
    <path d="M244.679 68.468c.094.183.163.382.201.593l.094.531c.033.186.18.321.35.321h1.448c.17 0 .317-.135.35-.321l.094-.531a2.13 2.13 0 0 1 .201-.593h-2.738z" fill="#FF4B55"/>
    <g fill="#82AFFF">
      <path d="M246.047 69.517c-.334 0-.595.041-.559.505l.135 1.985c.023.303.206.534.424.534.217 0 .402-.231.424-.534l.135-1.985c.035-.464-.226-.505-.559-.505zm-4.311 25.654s-.935-.177-1.748.474c0 0-.285-1.124 1.178-1.396 1.465-.269.57.922.57.922zm-1.126-1.421s-.74-.597-1.764-.408c0 0 .28-1.126 1.698-.673 1.418.452.066 1.081.066 1.081z"/>
      <path d="M241.224 94.332s-1.022-.177-1.91.474c0 0-.311-1.124 1.288-1.396 1.598-.27.622.922.622.922zm17.692 2.987s-.95.045-1.59.865c0 0-.537-1.028.824-1.63 1.362-.601.766.765.766.765zm-1.393-1.225s-.858-.409-1.811.011c0 0 .012-1.16 1.496-1.047 1.484.112.315 1.036.315 1.036z"/>
      <path d="M258.222 96.62s-1.035.065-1.749.903c0 0-.563-1.022.93-1.655 1.495-.634.819.752.819.752zm11.549 1.285s-.355 0-.993.599c0 0-.457-1.02.887-1.519 1.344-.501.106.92.106.92zm-.681-1.4s-.802-.444-1.742-.094c0 0 .079-1.114 1.5-.92 1.42.193.242 1.014.242 1.014z"/>
      <path d="M269.732 97.052s-.999.002-1.734.767c0 0-.482-1.015.991-1.538 1.473-.523.743.771.743.771zm-29.56-8.935s-.858-.57-1.947-.268c0 0 .194-1.24 1.771-.89 1.576.35.176 1.158.176 1.158zm-.07-2.139s-.555-.873-1.738-.949c0 0 .766-1.175 2.111-.274 1.345.902-.373 1.223-.373 1.223z"/>
      <path d="M240.107 87.114s-.906-.669-2.102-.422c0 0 .269-1.308 1.964-.824 1.696.483.138 1.246.138 1.246z"/>
    </g>
    <path d="M267.028 91.027c1.504.041 3.292-.555 3.576-2.113.327-1.79-1.206-2.696-3.265-2.614-1.503.06-5.308.922-8.033.826-2.696-.095-2.77-2.762 1.314-2.479 6.056.42 7.017-.365 7.017-.365-3.251.609-4.552-.529-8.007-.529s-4.117 2.392-2.723 3.699c1.563 1.463 7.234.488 8.738.203 1.504-.285 3.412-.3 3.563.759.136.948-2.385.897-4.169.829-2.841-.109-6.974.662-10.652.851-3.064.158-3.49-.706-4.188-1.59.163-.295.256-.622.256-.97 0-.175-.029-.344-.073-.509.232-.254.474-.66.586-1.32 0 0-.785-.138-1.376.161a2.903 2.903 0 0 0-1.8-.608c-.697 0-1.325.234-1.8.608-.591-.299-1.376-.161-1.376-.161.111.66.354 1.066.586 1.32a1.956 1.956 0 0 0-.073.509c0 .638.308 1.215.802 1.628.238.2.416.462.476.768l.086.434a.64.64 0 0 0 .319.429c-2.526-.26-3.721-1.847-4.334-2.73-.692-.995-1.124-3.197-2.182-3.441l-.623 3.319s1.336 3.089 3.82 4.349c2.804 1.422 3.332 1.463 4.254 1.869.108.488-1.734.786-3.604.406-1.305-.265-3.063-2.159-4.066-2.025l1.167 2.593c3.17 2.005 5.941 2.047 8.318 1.625 1.679-.298 2.318-1.665 2.429-2.251.685-.127 1.432-.269 3.748-.838.97-.238 2.086-.364 3.198-.416.313.715 1.03 1.631 3.495 1.716 0 0 .596.948-1.436.758-2.033-.19-2.553-.823-3.746-.687l1.064 2.53s2.601-.894 5.799-.569c0 0 .596.162.948-.352.352-.515.19-.813-.136-1.273-.183-.259-.288-1.1-.346-1.788 1.171.295 4.765-.435 6.062-.327 1.301.108 1.49 1.625 1.192 2.141-.298.515-3.021.075-3.021.075l.915 2.499s.275-.132.969-.786c.564-.531 2.872-.352 2.872-.758v-4.63a.376.376 0 0 0-.409-.372c-5.088.445-6.131-.403-6.131-.403z" fill="#FFE15A"/>
    <path d="M246.727 89.38a1.7 1.7 0 0 1 .163.483l.076.434c.026.152.147.262.285.262h1.181c.138 0 .258-.11.285-.262l.076-.434c.031-.171.087-.334.163-.483h-2.229z" fill="#FF4B55"/>
    <g fill="#82AFFF">
      <path d="M247.842 90.237c-.273 0-.484.033-.456.413l.11 1.619c.019.248.168.436.346.436.179 0 .328-.188.346-.436l.11-1.619c.029-.38-.183-.413-.456-.413zm-2.575 20.516s-.7-.132-1.309.355c0 0-.213-.842.883-1.045 1.096-.203.426.69.426.69zm-.843-1.065s-.555-.447-1.321-.306c0 0 .21-.843 1.271-.504 1.062.34.05.81.05.81z"/>
      <path d="M244.883 110.124s-.765-.132-1.43.355c0 0-.233-.842.964-1.045 1.197-.203.466.69.466.69zm13.247 2.237s-.712.033-1.191.648c0 0-.402-.77.617-1.22 1.019-.451.574.572.574.572zm-1.043-.917s-.643-.307-1.356.009c0 0 .01-.868 1.12-.785 1.112.084.236.776.236.776z"/>
      <path d="M257.611 111.838s-.775.049-1.309.676c0 0-.422-.765.696-1.239 1.118-.474.613.563.613.563zm8.648.962s-.266 0-.744.449c0 0-.342-.764.664-1.138 1.006-.375.08.689.08.689zm-.511-1.048s-.6-.332-1.304-.071c0 0 .06-.834 1.123-.69 1.064.145.181.761.181.761z"/>
      <path d="M266.229 112.161s-.748.002-1.299.575c0 0-.361-.76.742-1.152 1.103-.392.557.577.557.577zm-22.133-6.689s-.643-.427-1.458-.201c0 0 .146-.928 1.326-.666 1.18.261.132.867.132.867zm-.053-1.602s-.415-.653-1.301-.711c0 0 .574-.879 1.58-.205 1.008.675-.279.916-.279.916z"/>
      <path d="M244.046 104.721s-.679-.501-1.574-.316c0 0 .201-.979 1.471-.617 1.27.361.103.933.103.933z"/>
    </g>
    <path d="M264.204 107.649c1.126.031 2.465-.416 2.678-1.582.245-1.341-.903-2.018-2.444-1.958-1.126.044-3.974.691-6.015.619-2.018-.071-2.073-2.068.984-1.856 4.534.314 5.255-.274 5.255-.274-2.434.457-3.409-.396-5.995-.396-2.586 0-3.083 1.791-2.039 2.77 1.17 1.096 5.417.365 6.542.152 1.126-.213 2.554-.224 2.668.568.102.71-1.785.672-3.122.62-2.127-.082-5.221.495-7.976.638-2.294.118-2.614-.529-3.136-1.191.122-.221.192-.466.192-.726 0-.131-.021-.258-.054-.381.173-.191.355-.494.439-.989 0 0-.587-.103-1.031.12a2.172 2.172 0 0 0-1.347-.456c-.522 0-.992.175-1.347.456-.444-.224-1.031-.12-1.031-.12.084.494.266.798.439.989a1.455 1.455 0 0 0-.054.381c0 .478.231.909.6 1.219.179.149.311.346.356.575l.064.324a.48.48 0 0 0 .238.321c-1.891-.195-2.786-1.384-3.245-2.044-.519-.745-.842-2.393-1.633-2.577l-.467 2.485s1.001 2.313 2.86 3.256c2.1 1.065 2.495 1.096 3.185 1.4.082.365-1.299.588-2.698.305-.978-.199-2.294-1.618-3.044-1.516l.874 1.942c2.374 1.501 4.448 1.533 6.228 1.217 1.258-.223 1.736-1.247 1.818-1.685.513-.095 1.073-.202 2.806-.628.726-.179 1.561-.273 2.394-.311.235.535.771 1.22 2.616 1.284 0 0 .446.71-1.075.568-1.522-.142-1.912-.616-2.805-.515l.797 1.895s1.948-.67 4.341-.426c0 0 .446.121.71-.264.264-.385.142-.609-.102-.953-.137-.194-.216-.824-.259-1.338.877.221 3.567-.326 4.54-.244.973.082 1.116 1.217.893 1.602-.223.385-2.262.056-2.262.056l.684 1.871s.205-.099.725-.588c.423-.397 2.151-.264 2.151-.568v-3.467a.281.281 0 0 0-.307-.278c-3.809.335-4.589-.302-4.589-.302z" fill="#FFE15A"/>
    <path d="M249.003 106.418c.057.113.099.234.122.362l.057.324c.02.114.11.196.213.196h.884c.104 0 .193-.083.213-.196l.057-.324a1.31 1.31 0 0 1 .122-.362h-1.668z" fill="#FF4B55"/>
    <path d="M249.838 107.059c-.204 0-.363.024-.342.309l.083 1.212c.014.185.126.327.259.327.134 0 .245-.141.259-.327l.083-1.212c.021-.285-.138-.309-.342-.309z" fill="#82AFFF"/>
  </g>
        </svg>
      </div>
    );
  }
);

JeFlag.displayName = "JeFlag";

export default JeFlag;
