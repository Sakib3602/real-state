

const ReviewCard = ({e}) => {
    
    const {review , customerName , role} = e
    
    
    return (
        <div className="w-[400px] h-[250px]  p-3 m-4 bg-purple-100 rounded-xl  shadow-xl space-y-2">
            <h1 className="text-[36px] font-[500]">{customerName}</h1>
            
            <h1 className="text-[20px] font-[400]">{role}</h1>
            <h1 className="text-[20px] font-[400]">{review}</h1>
            
            
        </div>
    );
};

export default ReviewCard;