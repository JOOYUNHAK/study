import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class p11659 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()); int M = Integer.parseInt(st.nextToken());

        int [] arr = new int[N];
        int [] sum = new int[N+1];

        st = new StringTokenizer(br.readLine(), " ");

        for( int i = 0; i < N; i++ ) {
            arr[i] = Integer.parseInt(st.nextToken());
            sum[i+1] = sum[i] + arr[i];
        }
        
        StringBuilder sb = new StringBuilder();

        for( int i = 0; i < M; i++ ) {
            st = new StringTokenizer(br.readLine(), " ");
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());

            int answer = sum[end] - sum[start -1];
            sb.append(answer).append("\n");
        }
        System.out.print((sb));
    }    
}
