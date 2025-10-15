// 404 ErrorPage 
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
 <div className="flex items-center justify-center min-h-screen bg-secondary" style={{height:'680px'}}>
    <Result icon={  <img src="src/assets/Error.webp" alt=" rice field"  />}
 extra={ <Button type="primary" size="large" onClick={() => navigate('/')}>
 Back to Home
</Button>
  }
 />
    </div>
  );
};



export default PageNotFound;
