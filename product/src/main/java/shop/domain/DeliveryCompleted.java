package shop.domain;

import java.util.*;
import lombok.*;
import shop.domain.*;
import shop.infra.AbstractEvent;

@Data
@ToString
public class DeliveryCompleted extends AbstractEvent {

    private Long id;
    private String userid;
    private Integer qty;
    private String status;
    private Long orderid;
    private Long productid;
}
