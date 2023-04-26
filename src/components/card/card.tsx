interface ServiceCardProps {
   title: string;
   titleBg: string;
   icon: string;
   iconDescColor: string;
   imgService: string;
   bgColor: string; 
}

function ServiceCard (props: ServiceCardProps) {
   return (
      <div className="w-37.5 h-19.375  flex grid-cols-2">
         <div>
            <h1 className={`p-2 ${props.titleBg}`}>{props.title}</h1>
            <img src={props.icon} alt="Service card icon"/>
            <p className={props.iconDescColor}>Learn more</p>
         </div>
         <div>
            <img src={props.imgService} alt="Service card image" />
         </div>
      </div>
   );
}

export default ServiceCard;