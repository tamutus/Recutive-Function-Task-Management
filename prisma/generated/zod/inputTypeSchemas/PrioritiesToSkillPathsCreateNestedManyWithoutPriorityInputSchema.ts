import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';

export const PrioritiesToSkillPathsCreateNestedManyWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateNestedManyWithoutPriorityInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillPathsCreateManyPriorityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillPathsCreateNestedManyWithoutPriorityInputSchema;
