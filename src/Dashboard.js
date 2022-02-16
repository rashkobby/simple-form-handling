
import useFetch from './useFetch';


const Dashboard = () => {
    const {data: userInfo, isLoading, error} = useFetch('http://localhost:9000/person')

 
    return ( 
        <div className="dashboard">
            
            <table>
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email </th>
                        <th>Password</th>
                    </tr>
                    {error && <tr>{error}</tr>}
                    {isLoading && <tr>loading...</tr>}
                    
                    {userInfo.map((user) => ( 
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
     );
}
 
export default Dashboard;