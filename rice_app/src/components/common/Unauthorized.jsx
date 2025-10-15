
import { Result,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const Unauthorized = () => {

const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary " style={{height:'680px'}}>
<Result status="403" title="403 - Unauthorized" subTitle="Sorry, you are not allowed to access this page."
extra={
<Button type="primary" size="large" onClick={() => navigate('/')}>
 Back to Home
</Button>
  }     
 />
    </div>
  );
};

export default Unauthorized;
