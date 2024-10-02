
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type BmFlagProps = {
  className?: string;
};

const BmFlag = forwardRef<HTMLDivElement, BmFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v317.792a8.83 8.83 0 0 1-8.829 8.828z" fill="#FF4B55"/>
    <path d="M247.172 168H8.828A8.829 8.829 0 0 1 0 159.172V9.104A8.829 8.829 0 0 1 8.828.276h238.344A8.829 8.829 0 0 1 256 9.104v150.069a8.827 8.827 0 0 1-8.828 8.827z" fill="#41479B"/>
    <path d="M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 0 0 0 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 0 0 8.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 0 0 8.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 0 0-8.827-8.828z" fill="#F5F5F5"/>
    <g fill="#FF4B55">
      <path d="M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"/>
      <path d="M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"/>
    </g>
    <path d="M320.945 86.029a3.153 3.153 0 0 0-3.153 3.153v116.65c0 9.458 6.305 40.985 66.207 50.443 59.902-9.458 66.207-40.985 66.207-50.443V89.183a3.153 3.153 0 0 0-3.153-3.153H320.945v-.001z" fill="#F5F5F5"/>
    <path d="M383.999 256.276c50.004-7.895 62.651-31.16 65.469-44.138H318.531c2.817 12.977 15.464 36.243 65.468 44.138z" fill="#73AF00"/>
    <path d="M424.984 152.237s3.153-3.153 0-9.458l-40.985-1.834-40.985 1.834c-3.153 6.305 0 9.458 0 9.458-3.153 3.153-3.153 6.305-3.153 6.305h6.305l6.831 11.297 31.001 17.077L415 169.839l6.831-11.297h6.305c.001 0 .001-3.152-3.152-6.305z" fill="#82AFFF"/>
    <path d="M415.002 169.839s-1.971-4.335-7.225-3.809c0 0-2.89-3.809-7.751-2.759 0 0-5.649-3.284-8.932 2.759 0 0-10.444-1.062-11.002 6.891 0 0 16.256 24.504 16.651 24.767.394.263 19.442.131 19.442.131l8.802-9.711-8.671-12.489-1.314-5.78z" fill="#F5F5F5"/>
    <path d="M384.394 177.59s-13.79-22.528-15.764-24.434c-1.905-1.839-5.649-3.546-9.459-.394 0 0-11.428-.919-9.853 7.751l3.284 13.137s-2.89 9.064-4.204 9.984c-1.313.919-6.174 3.415-6.174 3.415l2.759 10.903 36.781-1.839 2.63-18.523z" fill="#F0C850"/>
    <path d="M400.288 167.737l-.043.019-1.017-2.401a.784.784 0 0 0-1.043-.413l-6.842 3.017-8.138-13.322c.361-.31.518-.817.348-1.289a1.184 1.184 0 0 0-1.512-.717l-1.814.649-1.227-3.626a.793.793 0 0 0-.999-.495.79.79 0 0 0-.494 1.001l1.236 3.654-1.939.694a1.183 1.183 0 0 0 .399 2.298c.068 0 .138-.023.207-.035l2.682 16.153-1.73.762a.787.787 0 0 0-.424.985l.981 2.732c.024.46.022 1.236-.135 2.218l-11.006-18.879c.462-.289.693-.851.502-1.383a1.18 1.18 0 0 0-1.512-.717l-1.814.649-1.227-3.626a.788.788 0 1 0-1.493.506l1.236 3.654-1.939.694a1.183 1.183 0 0 0-.714 1.512c.158.441.559.701.995.748l4.777 29.814c-.617.259-1.222.522-1.901.764 0 0-2.233 10.641-.525 11.166 1.708.525 19.31 5.911 19.31 5.911s24.302-11.56 24.828-11.822c.525-.263 1.577-7.882 1.577-7.882l-9.59-22.993zm-1.491.64l-2.035.874-.674-1.663 1.999-.882.71 1.671zm-12.3 3.441l1.673-.737.643 1.585-1.771.761-.545-1.609zm-.909 2.232l-1.978.85-.622-1.534 2.062-.909.538 1.593zm4.672-2.006l-.649-1.599 1.788-.788.655 1.618-1.794.769zm2.58-3.022l1.806-.797.669 1.649-1.814.779-.661-1.631zm-11.104-13.768l8.152 13.346-3.897 1.718-5.005-14.796.75-.268zm-2.814 1.008l.578-.207 5.042 14.904-2.963 1.306-2.657-16.003zm2.624 17.74l.617 1.521-1.945.835-.548-1.528 1.876-.828zm-15.251-12.678l11.938 20.479c-.601 1.737-1.735 3.753-3.723 5.732l-8.797-26.004.582-.207zm-2.947 1.056l.882-.316 9.009 26.632c-1.366 1.133-3.065 2.228-5.156 3.231l-4.735-29.547z" fill="#965032"/>
    <path d="M427.842 138.001c-.837-1.33-3.524-.76-3.524-.76s-.767-1.534-2.794-1.682c-2.027-.148-2.399 1.657-2.399 1.657s-.38-.282-2.613-.216c-2.233.066-1.773 3.744-1.773 3.744s-.854 0-3.744-.919c-2.89-.92-4.794-.263-4.794-.263-.131-1.511-.919-2.627-.919-2.627-2.43.985-4.335-.131-4.794-.985-.46-.854.723-2.167.723-3.284s-1.544-1.067-2.086-2.052c-.542-.985 0-1.527 1.429-2.167 1.429-.64 2.759-3.005 1.871-4.926-.888-1.921-3.448-1.577-3.448-1.577.887.148 1.625 1.823.198 2.167-1.428.344-2.709-4.877-2.709-4.877 3.3 2.217 5.715.887 6.404-1.035.69-1.922-1.133-3.251-1.133-3.251-1.429 2.315-3.892.296-2.561-1.182 1.33-1.478 1.444-3.957 1.444-3.957-2.956 1.446-4.794-.394-4.794-.394 3.875-2.692 2.759-6.503 2.759-6.503-1.444-.657-4.532-.131-4.532-.131.657-1.314.525-3.679.525-3.679-1.642-.263-3.481.788-3.481.788.525-1.838-.198-5.057-.198-5.057-1.182.198-3.415.854-3.415.854-.919-2.102-3.481-3.35-3.481-3.35s-2.561 1.248-3.481 3.35c0 0-2.233-.657-3.415-.854 0 0-.723 3.219-.198 5.057 0 0-1.839-1.05-3.481-.788 0 0-.131 2.365.525 3.679 0 0-3.087-.525-4.532.131 0 0-1.117 3.809 2.759 6.503 0 0-1.839 1.839-4.794.394 0 0 .115 2.479 1.444 3.957 1.33 1.478-1.133 3.498-2.561 1.182 0 0-1.823 1.33-1.133 3.251.69 1.921 3.104 3.251 6.404 1.035 0 0-1.281 5.222-2.709 4.877-1.428-.344-.69-2.019.198-2.167 0 0-2.561-.345-3.448 1.577-.887 1.921.444 4.286 1.871 4.926 1.429.64 1.971 1.182 1.429 2.167-.542.985-2.086.936-2.086 2.052 0 1.117 1.182 2.43.723 3.284-.46.854-2.365 1.971-4.794.985 0 0-.788 1.117-.919 2.627 0 0-1.905-.657-4.794.263-2.89.919-3.744.919-3.744.919s.46-3.678-1.773-3.744c-2.233-.066-2.613.216-2.613.216s-.371-1.805-2.399-1.657c-2.027.149-2.794 1.682-2.794 1.682s-2.687-.569-3.524.76c-.837 1.33-.936 3.35.64 4.188 1.577.838 5.763 4.335 5.763 4.335l5.911 2.561 20.69-9.163 10.837 2.857 10.837-2.857 20.69 9.163 5.911-2.561s4.188-3.498 5.763-4.335c1.572-.839 1.474-2.859.636-4.188z" fill="#FF4B55"/>
    <path d="M377.546 104.613s.223 2.782 4.34 2.04c-.001 0-.111-2.893-4.34-2.04z" fill="#F5F5F5"/>
    <path d="M362.313 214.503s-2.956-.098-6.009 2.167c-3.054 2.266-4.401.657-7.455.657-3.054 0-3.777 3.186-3.777 3.186s-5.911 1.478-3.546 5.813c1.495 2.742 3.576 2.684 4.908 2.272-.067 1.842.352 3.866 2.481 4.231 4.04.69 5.813-1.478 4.926-4.828 0 0 .492 3.448 3.153 3.35 2.66-.098 4.434-1.577 4.138-5.123-.296-3.546 4.434-1.379 8.078-6.601l-6.897-5.124z" fill="#FF4B55"/>
    <path d="M345.039 227.179s-1.839 2.43-1.313 4.794c0 0-3.94-1.248-1.839-7.094-.001.001 2.693-.721 3.152 2.3zm6.19 3.186s-1.084 3.054.394 5.763c0 0-4.926-.148-3.94-6.207 0 0 1.576-1.625 3.546.444zm4.927-.296s.887 2.561 0 5.025c0 0 4.04-.246 3.35-6.059-.001 0-2.168-.788-3.35 1.034z" fill="#82AFFF"/>
    <path d="M352.56 171.153c-.373-3.038-19.409-4.828-18.227 11.166 0 0-2.112-.039-3.15 1.927-1.038 1.966-3.264 1.484-3.932.779 0 0 .148 3.561 4.562 3.412 0 0-1.397 1.1-1.199 2.708.198 1.608 1.359 3.635 1.286 5.02-.073 1.385-1.385 3.314-1.385 3.314s3.388-1.162 3.61-3.585c.223-2.423-.321-4.451.346-5.687 0 0-.321 1.706 1.187 3.858s1.582 4.772.964 6.404c0 0 3.758-1.855 3.041-5.44-.717-3.585-1.484-3.264-1.138-5.267 0 0 3.907 3.981 3.24 7.369 0 0 1.249-1.496 1.138-4.314-.111-2.819-2.068-4.715-2.068-4.715s13.005-6.505 11.725-16.949zm53.126 43.35s2.956-.098 6.009 2.167c3.054 2.266 4.401.657 7.455.657 3.054 0 3.777 3.186 3.777 3.186s5.911 1.478 3.546 5.813c-1.495 2.742-3.576 2.684-4.908 2.272.067 1.842-.352 3.866-2.481 4.231-4.04.69-5.813-1.478-4.926-4.828 0 0-.492 3.448-3.153 3.35-2.66-.098-4.434-1.577-4.138-5.123.296-3.546-4.434-1.379-8.078-6.601l6.897-5.124z" fill="#FF4B55"/>
    <path d="M422.961 227.179s1.839 2.43 1.313 4.794c0 0 3.94-1.248 1.839-7.094 0 .001-2.693-.721-3.152 2.3zm-6.192 3.186s1.084 3.054-.394 5.763c0 0 4.926-.148 3.94-6.207.002 0-1.575-1.625-3.546.444zm-4.925-.296s-.887 2.561 0 5.025c0 0-4.04-.246-3.35-6.059-.001 0 2.168-.788 3.35 1.034z" fill="#82AFFF"/>
    <path d="M415.44 171.153c.373-3.038 19.409-4.828 18.227 11.166 0 0 2.112-.039 3.15 1.927 1.038 1.966 3.264 1.484 3.932.779 0 0-.148 3.561-4.562 3.412 0 0 1.397 1.1 1.199 2.708-.198 1.608-1.361 3.635-1.286 5.02.074 1.385 1.385 3.314 1.385 3.314s-3.388-1.162-3.61-3.585c-.223-2.423.321-4.451-.346-5.687 0 0 .321 1.706-1.187 3.858s-1.582 4.772-.964 6.404c0 0-3.758-1.855-3.041-5.44.717-3.585 1.484-3.264 1.138-5.267 0 0-3.907 3.981-3.24 7.369 0 0-1.249-1.496-1.138-4.314.111-2.819 2.068-4.715 2.068-4.715s-13.006-6.505-11.725-16.949z" fill="#FF4B55"/>
    <path d="M423.227 143.893a1.568 1.568 0 0 0-2.185.447c-.997 1.505-2.311 2.386-4.014 2.691-5.641.979-13.773-4.575-16.135-6.312-3.423-2.516-7.651-2.953-10.458-1.224-1.12.371-4.544 1.45-6.434 1.45-1.89 0-5.314-1.08-6.434-1.45-2.807-1.729-7.036-1.292-10.458 1.224-2.361 1.737-10.494 7.29-16.135 6.312-1.704-.305-3.017-1.185-4.014-2.691a1.572 1.572 0 0 0-2.185-.447 1.576 1.576 0 0 0-.445 2.183c1.478 2.236 3.527 3.599 6.091 4.057.648.117 1.31.169 1.984.169 6.016 0 12.823-4.292 16.568-7.041 2.785-2.045 5.907-2.041 7.313-.856.355.301.759.776.662 1.333-.052.305-.253.579-.587.81a1.575 1.575 0 0 0-2.668-1.373c-.802.798-.889 2.093-.214 3.147.679 1.056 2.142 1.828 3.88 1.185.883-.329 1.589-.958 2.078-1.728 2.396-.697 4.565-.702 4.565-.702s2.169.004 4.565.702c.489.77 1.195 1.399 2.078 1.728 1.738.643 3.2-.129 3.88-1.185.675-1.053.588-2.349-.214-3.147a1.575 1.575 0 0 0-2.668 1.373c-.334-.231-.534-.505-.587-.81-.097-.557.307-1.032.662-1.333 1.406-1.185 4.527-1.188 7.313.856 3.745 2.75 10.552 7.041 16.568 7.041.674 0 1.336-.052 1.984-.169 2.564-.459 4.613-1.823 6.091-4.057a1.577 1.577 0 0 0-.447-2.183z" fill="#FFE15A"/>
    <path d="M343.83 145.634s-.259-3.523-.371-4.673c-.112-1.15-2.262-2.003-3.079-.853-.816 1.15-1.037 3.264 3.45 5.526zm.761-1.131s3.104-2.513 2.709-3.842c-.394-1.33-1.231-2.019-2.266-1.625-1.036.394-1.527 2.807-.443 5.467zm6.059-1.971c.446-.446.591-2.611-.64-2.857-1.231-.246-2.857 1.675-2.759 4.04 0-.001 2.561-.345 3.399-1.183zm-1.281 1.232c-1.429.457-2.808 1.675-2.808 1.675s2.561 1.871 4.335 1.281c1.774-.59.937-3.744-1.527-2.956z" fill="#82AFFF"/>
    <path d="M390.453 104.613s-.223 2.782-4.34 2.04c0 0 .112-2.893 4.34-2.04z" fill="#F5F5F5"/>
    <path d="M424.169 145.634s.259-3.523.371-4.673c.111-1.15 2.262-2.003 3.079-.853.815 1.15 1.038 3.264-3.45 5.526zm-.76-1.131s-3.104-2.513-2.709-3.842c.394-1.33 1.231-2.019 2.266-1.625 1.035.394 1.526 2.807.443 5.467zm-6.059-1.971c-.446-.446-.591-2.611.64-2.857 1.231-.246 2.857 1.675 2.759 4.04-.001-.001-2.562-.345-3.399-1.183zm1.28 1.232c1.429.457 2.808 1.675 2.808 1.675s-2.561 1.871-4.335 1.281c-1.775-.59-.936-3.744 1.527-2.956z" fill="#82AFFF"/>
    <g fill="#464655">
      <path d="M382.369 111.168l1.25 1.25c.21.21.551.21.76 0l1.25-1.25a.538.538 0 0 0-.381-.918h-2.5a.538.538 0 0 0-.379.918z"/>
      <path d="M381.715 116.295c-.927 0-1.729-.332-2.274-.946-.564-.638-.803-1.515-.661-2.408.051-.299.351-.48.632-.456.301.05.505.332.457.634-.09.564.054 1.108.397 1.496.354.397.895.582 1.559.573 1.386-.055 1.618-1.41 1.628-1.465l-.007-2.473a.55.55 0 1 1 1.102 0v2.559c-.134.884-.856 2.408-2.68 2.482-.049.004-.102.004-.153.004z"/>
      <path d="M386.284 116.295c-.051 0-.103 0-.156-.003-1.824-.074-2.546-1.598-2.674-2.396l-.007-2.645a.55.55 0 1 1 1.102 0v2.559c.019.055.277 1.327 1.621 1.379.683.012 1.204-.169 1.559-.573.343-.388.488-.932.397-1.496a.554.554 0 0 1 .457-.634c.288-.036.584.154.632.456.143.893-.097 1.77-.66 2.408-.543.613-1.344.945-2.271.945z"/>
    </g>
    <g fill="#F5F5F5">
      <path d="M402.916 196.375s-3.94-6.305-8.538-2.102c-4.598 4.204-6.305 9.327-11.56 8.932-2.883-.216-4.356-1.533-5.121-2.684 1.396-1.149 2.386-2.894 1.312-5.461-2.365-5.649-11.034-3.94-13.399 2.233 0 0 2.759-9.064-6.831-6.042 0 0-1.182-6.305-6.699-4.598-3 .929-4.11 2.775-4.522 4.279-1.161-.27-2.652-.262-4.017.844l6.962 18.785 10.509.131 2.365 3.546 13.793 8.67 2.496 5.255h8.67s.657-5.386 5.255-6.962c4.598-1.577 12.085-4.861 12.874-7.751l.788-2.89 8.407.131c.919-.657 7.094-10.772 7.094-10.772l2.866-13.027c-1.583-.227-19.689-2.576-22.704 9.483z"/>
      <path d="M425.641 186.785l-.024.109.156.023-.132-.132z"/>
    </g>
    <path d="M368.424 216.516c-3.406-1.373-4.622-3.297-5.043-4.322-.391-.948-.314-1.62-.207-1.866.217-.502.48-.822.725-.884.231-.055.523.077.576.11.11.126.169.526.063.625a1.578 1.578 0 0 0 2.162 2.296c.648-.609 1.02-1.462 1.045-2.401.03-1.006-.339-2.01-.982-2.688-.646-.683-1.971-1.305-3.383-1.053-.291.051-.619.17-.954.332.221-2.184-.621-3.302-1.239-3.753-1.039-.755-2.518-.772-3.763-.043-1.273.748-1.961 2.057-1.793 3.412.108.865.975 1.383 1.821 1.266.864-.105 1.543-.997 1.437-1.859.179-.163.414-.218.406-.256.003.003.211.348-.04 1.46-.393 1.742-1.314 2.814-2.74 3.19-1.775.49-4.049-.258-5.393-1.734-1.869-2.057-5.781-12.971-8.107-20.241 9.971-4.729 11.196-12.586 11.007-16.964-.288-6.669-4.278-13.492-8.715-14.899-1.746-.551-4.361-.665-6.259.314-1.075.561-1.821 1.419-2.157 2.487-.685 2.179.686 3.981 2.326 4.569 1.698.609 3.412-.124 4.071-1.746.327-.807-.03-1.73-.836-2.057-.811-.335-1.694.058-2.019.862-.066.036-.285-.046-.448-.231-.118-.136-.143-.268-.085-.449.052-.167.171-.413.605-.638 1.03-.538 2.752-.456 3.852-.108 2.539.803 6.246 5.77 6.516 12.029.161 3.741-.974 10.598-10.388 14.505a1.576 1.576 0 0 0-.9 1.928c.615 1.967 6.098 19.341 9.204 22.755 1.671 1.838 4.196 2.906 6.611 2.906.654 0 1.301-.077 1.92-.241 1.053-.279 1.932-.822 2.697-1.504.076.578.21 1.17.454 1.762.609 1.484 2.3 4.243 7.02 6.145 9.547 3.83 10.454 6.391 10.402 7.318-.029.508-.32.772-.557.905a1.162 1.162 0 0 1-.292.117 1.581 1.581 0 0 0 .105-1.703 1.575 1.575 0 0 0-2.144-.607c-1.073.6-1.821 2.014-1.18 3.559.5 1.201 1.671 1.928 3.023 1.928a4.236 4.236 0 0 0 4.192-4.018c.27-4.779-6.937-8.236-12.616-10.515zm31.151 0c3.406-1.373 4.622-3.297 5.043-4.322.391-.948.314-1.62.207-1.866-.217-.502-.48-.822-.725-.884-.231-.055-.523.077-.576.11-.11.126-.169.526-.063.625a1.577 1.577 0 0 1-2.162 2.296c-.648-.609-1.02-1.462-1.045-2.401-.029-1.006.339-2.01.982-2.688.646-.683 1.971-1.305 3.383-1.053.291.051.619.17.954.332-.221-2.184.621-3.302 1.239-3.753 1.039-.755 2.518-.772 3.763-.043 1.273.748 1.961 2.057 1.793 3.412-.108.865-.975 1.383-1.821 1.266-.864-.105-1.543-.997-1.437-1.859-.179-.163-.414-.218-.406-.256-.003.003-.211.348.04 1.46.393 1.742 1.314 2.814 2.74 3.19 1.775.49 4.049-.258 5.393-1.734 1.869-2.057 5.781-12.971 8.107-20.241-9.971-4.729-11.196-12.586-11.007-16.964.288-6.669 4.278-13.492 8.715-14.899 1.746-.551 4.361-.665 6.259.314 1.075.561 1.821 1.419 2.157 2.487.685 2.179-.686 3.981-2.326 4.569-1.698.609-3.412-.124-4.071-1.746-.327-.807.03-1.73.836-2.057.811-.335 1.694.058 2.019.862.066.036.285-.046.448-.231.118-.136.143-.268.085-.449-.052-.167-.171-.413-.605-.638-1.03-.538-2.752-.456-3.852-.108-2.539.803-6.246 5.77-6.516 12.029-.161 3.741.974 10.598 10.388 14.505a1.576 1.576 0 0 1 .9 1.928c-.615 1.967-6.098 19.341-9.204 22.755-1.671 1.838-4.196 2.906-6.611 2.906a7.501 7.501 0 0 1-1.92-.241c-1.053-.279-1.932-.822-2.697-1.504a6.959 6.959 0 0 1-.454 1.762c-.609 1.484-2.3 4.243-7.02 6.145-9.547 3.83-10.454 6.391-10.402 7.318.03.508.32.772.557.905.103.059.205.095.292.117a1.581 1.581 0 0 1-.105-1.703 1.575 1.575 0 0 1 2.144-.607c1.073.6 1.821 2.014 1.18 3.559-.5 1.201-1.671 1.928-3.023 1.928a4.236 4.236 0 0 1-4.192-4.018c-.271-4.779 6.937-8.236 12.616-10.515z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

BmFlag.displayName = "BmFlag";

export default BmFlag;
