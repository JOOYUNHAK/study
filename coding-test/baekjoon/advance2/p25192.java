import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;

public class p25192 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        HashSet<String> set = new HashSet<String>();

        int count = 0;

        for( int i = 0; i < N; i++ ) {
            String chat = br.readLine();

            if( chat.equals("ENTER") ) {
                set.clear();
                continue;
            }
            if( !set.contains(chat) ) {
                count++;
                set.add(chat);
            }
        }
        System.out.println(count);
    }    
}
