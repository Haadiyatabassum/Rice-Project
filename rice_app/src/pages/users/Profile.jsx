
import { Layout,Button,Avatar,Form,Input,Card,Grid } from 'antd'
import {UserOutlined} from '@ant-design/icons';
const {Sider,Content}=Layout;
const Profile = () => {
    const {useBreakpoint}=Grid;
    const screens=useBreakpoint();

    const onFinish=(values)=>{
        console.log('Form Values',values)
    };
  return (
    <Layout style={{minHeight:'80vh',flexDirection:screens.xs?'column':'row'}}>
        <Sider width={screens.xs?'100%':300}   theme="light" style={{padding:'20px',textAlign:'center'}}>
            <div style={{textAlign:'center',padding:'20px',marginTop:'20px'}}>
                <Avatar size={64}  icon={<UserOutlined/>}/>
                <h6 style={{marginTop:'10px'}}>Maria</h6>
                <Button  type="primary" danger style={{marginTop:10}} block={screens.xs}>Logout</Button>
            </div>
        </Sider>

        {/*Main  Section*/}
        <Layout style={{padding:screens.xs? '20px':'40px'}}> 
            <Content style={{padding:'40px'}}>
                <Card style={{maxWidth:500,width:'100%',margin:'0 auto'}}>
                    <Form layout="vertical" onFinish={onFinish} style={{width:'100%'}}>
                        <Form.Item label="Username" name="username" rules={[{required:true,message:'Please enter username'}]}><Input/></Form.Item>
                         <Form.Item label="Email" name="email" rules={[{type:'email',required:true,message:'Enter valid email'}]}><Input/></Form.Item>
                          <Form.Item label="Password" name="password" rules={[{required:true,message:'Enter password'}]}><Input.Password/></Form.Item>
                      <Form.Item label="Role" name="role" ><Input/></Form.Item>
                    <Form.Item>
                        <Button type="primary">Update Profile</Button>
                    </Form.Item>
    
                    </Form>
                </Card>
            </Content>
        </Layout>
    </Layout>
  )
}

export default Profile