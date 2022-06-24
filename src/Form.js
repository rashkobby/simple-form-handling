import useFetch from './useFetch';

const Form = () => {
    const {data: userInfo, isLoading, error} = useFetch('https://nordc.herokuapp.com/logs')

 
    return ( 
        <div className="logs">
            
            <table>
                <tbody>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        <th>IP Address</th>          
                    </tr>
                    {error && <tr>{error}</tr>}
                    {isLoading && <tr>loading...</tr>}
                    
                    {userInfo.map((user) => ( 
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.userpass}</td>
                            <td>{user.ipAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
     );
}
 
export default Form;