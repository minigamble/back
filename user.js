const router = require('express').Router();
const User = require('./user.model');

router.route('/').post((req, res) => {
    User.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/inv').post((req, res) => {
  const invite = req.body.invite;
  User.find({invite:invite})
  .then(invite => res.json(invite))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/b').post((req, res) => {
  const b = req.body.b;
  User.find({b:b})
  .then(b => res.json(b))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/c').post((req, res) => {
  const c = req.body.c;
  User.find({c:c})
  .then(c => res.json(c))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/d').post((req, res) => {
  const d = req.body.d;
  User.find({d:d})
  .then(d => res.json(d))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const phone = req.body.phone;
  User.find({phone:phone})
  .then(phone => res.json(phone))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rand').post((req, res) => {
  User.aggregate()
  .then(test => res.json(test))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const phone = req.body.phone
  const password = req.body.password
  const invite  = req.body.invite
  const AcBalance = req.body.AcBalance
  const InBalance = req.body.InBalance
  const product = req.body.product
  const cycle = req.body.cycle
  const daily = req.body.daily
  const total  = req.body.total
  const task  = req.body.task
  const count  = req.body.count
  const ac = req.body.ac
  const b = req.body.b
  const c = req.body.c
  const d = req.body.d
  const rb = req.body.rb
  const rc = req.body.rc
  const rd = req.body.rd
  const bank = req.body.bank
  const acname = req.body.acname
  const Deposit = req.body.Deposit
  const withdrawal = req.body.withdrawal
  const key = req.body.key
  const bonus = req.body.bonus
  const id = req.body.id

  const userData = new User({ phone,password,invite,AcBalance,InBalance,product,cycle,daily,total,task,count,ac,b,c,d,rb,rc,rd,bank,acname,Deposit,withdrawal,key,bonus,id });

  userData.save()
    .then(() => res.json('User Registration sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  User.findOneAndRemove({"test":test})
  
    .then(() => res.json('test Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const invite = req.body.invite
  User.findOne({invite:invite})
    .then(invite => {
      invite.phone = req.body.phone;
      invite.password = req.body.password;
      invite.invite = req.body.invite;
      invite.AcBalance = req.body.AcBalance;
      invite.InBalance = req.body.InBalance;
      invite.product = req.body.product;
      invite.cycle = req.body.cycle;
      invite.daily = req.body.daily;
      invite.total = req.body.total;
      invite.task = req.body.task;
      invite.count = req.body.count;
      invite.ac = req.body.ac;
      invite.b = req.body.b;
      invite.c = req.body.c;
      invite.d = req.body.d;
      invite.rb = req.body.rb;
      invite.rc = req.body.rc;
      invite.rd = req.body.rd;
      invite.bank = req.body.bank;
      invite.acname = req.body.acname;
      invite.Deposit = req.body.Deposit;
      invite.withdrawal = req.body.withdrawal;
      invite.key = req.body.key;
      invite.bonus = req.body.bonus;
      invite.id = req.body.id;

      invite.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/task').post((req, res) => {
  const phone = req.body.phone
  User.findOne({phone:phone})
    .then(invite => {
      invite.phone = req.body.phone;
      invite.password = req.body.password;
      invite.invite = req.body.invite;
      invite.AcBalance = req.body.AcBalance;
      invite.InBalance = req.body.InBalance;
      invite.product = req.body.product;
      invite.cycle = req.body.cycle;
      invite.daily = req.body.daily;
      invite.total = req.body.total;
      invite.task = req.body.task;
      invite.count = req.body.count;
      invite.ac = req.body.ac;
      invite.b = req.body.b;
      invite.c = req.body.c;
      invite.d = req.body.d;
      invite.rb = req.body.rb;
      invite.rc = req.body.rc;
      invite.rd = req.body.rd;
      invite.bank = req.body.bank;
      invite.acname = req.body.acname;
      invite.Deposit = req.body.Deposit;
      invite.withdrawal = req.body.withdrawal;
      invite.key = req.body.key;
      invite.bonus = req.body.bonus;
      invite.id = req.body.id;

      invite.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/runtask').post((req, res) => {
  const key = req.body.key
  User.findOne({key:key})
    .then(invite => {
      invite.phone = req.body.phone;
      invite.password = req.body.password;
      invite.invite = req.body.invite;
      invite.AcBalance = req.body.AcBalance;
      invite.InBalance = req.body.InBalance;
      invite.product = req.body.product;
      invite.cycle = req.body.cycle;
      invite.daily = req.body.daily;
      invite.total = req.body.total;
      invite.task = req.body.task;
      invite.count = req.body.count;
      invite.ac = req.body.ac;
      invite.b = req.body.b;
      invite.c = req.body.c;
      invite.d = req.body.d;
      invite.rb = req.body.rb;
      invite.rc = req.body.rc;
      invite.rd = req.body.rd;
      invite.bank = req.body.bank;
      invite.acname = req.body.acname;
      invite.Deposit = req.body.Deposit;
      invite.withdrawal = req.body.withdrawal;
      invite.key = req.body.key;
      invite.bonus = req.body.bonus;
      invite.id = req.body.id;

      invite.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;