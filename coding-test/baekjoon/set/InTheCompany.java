import java.util.*;
import java.io.*;

public class InTheCompany {
    public static void main(String[] agrs) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int n = Integer.parseInt(br.readLine());

        HashMap<String, Boolean> map = new HashMap<String, Boolean>();

        for( int i = 0; i < n; i++ ) {
            String name = br.readLine().split(" ")[0];

            if( map.containsKey(name) ) map.remove(name);
            else map.put(name, true);
        }

        ArrayList<String> list = new ArrayList<String>(map.keySet());

        Collections.sort(list, Collections.reverseOrder());

        for( String name: list ) {
            System.out.print(name + " ");
        }
    } 
}
