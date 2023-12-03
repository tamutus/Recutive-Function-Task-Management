import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsCreateWithoutSkillInputSchema } from './PrioritiesToSkillsCreateWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema } from './PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateManySkillInputEnvelopeSchema } from './PrioritiesToSkillsCreateManySkillInputEnvelopeSchema';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';

export const PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillsUncheckedCreateNestedManyWithoutSkillInputSchema;
