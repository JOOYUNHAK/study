import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;

/* 우선순위 큐 - 최대 합 */
public class p11279 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        PriorityQueue<Integer> queue = new PriorityQueue<Integer>(Collections.reverseOrder());

        StringBuilder sb = new StringBuilder();

        for( int i = 0; i < N; i++ ) {
            int n = Integer.parseInt(br.readLine());

            if( n == 0 ) {
                sb.append(queue.size() == 0 ? 0 : queue.poll()).append("\n");
            } else {
                queue.add(n);
            }
        }
        System.out.println(sb.toString());
    }    
}
