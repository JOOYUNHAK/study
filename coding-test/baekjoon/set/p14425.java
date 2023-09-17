import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;

public class p14425 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        HashSet<String> list = new HashSet<String>();
        
        String [] arr = br.readLine().split(" ");

        int N = Integer.parseInt(arr[0]);
        int M = Integer.parseInt(arr[1]);

        for( int i = 0; i < N; i++ ) {
            String str = br.readLine();
            list.add(str);
        }
        int answer = 0;

        for( int i = 0; i < M; i++ ) {
            String str = br.readLine();

            if( list.contains(str) ) {
                answer++;
            };
        }

        System.out.println(answer);
    }
}
