import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';

export const PrioritiesToSkillsCreateNestedManyWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateNestedManyWithoutPriorityInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillsCreateManyPriorityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillsCreateNestedManyWithoutPriorityInputSchema;
