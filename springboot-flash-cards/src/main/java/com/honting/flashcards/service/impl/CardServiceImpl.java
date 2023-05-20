package com.honting.flashcards.service.impl;

import com.honting.flashcards.entity.Card;
import com.honting.flashcards.repository.CardRepository;
import com.honting.flashcards.service.CardService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardServiceImpl implements CardService {

    private final CardRepository cardRepository;

    public CardServiceImpl(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @Override
    public List<Card> getAllCards() {
        return cardRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Card addCard(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public Card updateCard(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public HttpStatus deleteCard(Long id) {
        try {
            cardRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            return HttpStatus.BAD_REQUEST;
        }

        return HttpStatus.OK;
    }

}
