interface ServiceCardProps {
   title: string;
   titleBg: string;
   icon: string;
   iconDescColor: string;
   imgService: string;
   bgColor: string; 
}

export const ServiceCard = (props: ServiceCardProps) => {
   return (

      <div>
         <h1 className={`p-2 ${props.titleBg}`}>{props.title}</h1>
         <img src={props.icon} alt="Service card icon"/>
         <p className={props.iconDescColor}>Learn more</p>
         
         <div>
         <img src={props.imgService} alt="Service card image" />
      </div>
      </div>

   );
}

