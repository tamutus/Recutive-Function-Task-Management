import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInputSchema } from './PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInputSchema';
import { PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInputSchema } from './PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInputSchema';
import { PrioritiesToSkillsScalarWhereInputSchema } from './PrioritiesToSkillsScalarWhereInputSchema';

export const PrioritiesToSkillsUncheckedUpdateManyWithoutPriorityNestedInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUncheckedUpdateManyWithoutPriorityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUpsertWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUpdateWithWhereUniqueWithoutPriorityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUpdateManyWithWhereWithoutPriorityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema),z.lazy(() => PrioritiesToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillsUncheckedUpdateManyWithoutPriorityNestedInputSchema;
