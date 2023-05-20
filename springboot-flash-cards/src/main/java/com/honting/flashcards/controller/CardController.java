package com.honting.flashcards.controller;

import com.honting.flashcards.entity.Card;
import com.honting.flashcards.service.CardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/card")
public class CardController {

    private final CardService cardService;

    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Card>> getAllCards() {
        List<Card> cards = cardService.getAllCards();
        return new ResponseEntity<List<Card>>(cards, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity addCard(@RequestBody Card card) {
        Card newCard = cardService.addCard(card);
        return new ResponseEntity<Card>(newCard, HttpStatus.CREATED);
    }

    @PutMapping()
    public ResponseEntity updateCard(@RequestBody Card card) {
        Card newCard = cardService.updateCard(card);
        return new ResponseEntity<Card>(newCard, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCard(@PathVariable Long id) {
        return new ResponseEntity<>(cardService.deleteCard(id));
    }

}
