import java.util.*;
import java.io.*;

/* 집합 - 듣보잡 */
public class NoSeeNoListen {
    public static void main(String[] agrs) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String arr[] = br.readLine().split(" ");

        int N = Integer.parseInt(arr[0]);
        int M = Integer.parseInt(arr[1]);

        Set<String> listenSet = new HashSet<String>();
        Set<String> watchSet = new HashSet<String>();

        for( int i = 0; i < N; i++ ) {
            String name = br.readLine();
            listenSet.add(name);
        }

        for( int i = 0; i < M; i++ ) {
            String name = br.readLine();
            watchSet.add(name);
        }

        listenSet.retainAll(watchSet);

        List<String> list = new ArrayList<String>(listenSet);

        Collections.sort(list);

        StringBuilder sb = new StringBuilder();

        sb.append(list.size() + "\n");

        for( String name: list ) {
            sb.append(name + "\n");
        }
        System.out.print(sb);
    }
}
