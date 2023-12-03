import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema } from './PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema';
import { PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema } from './PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema';
import { PrioritiesToSkillPathsWhereUniqueInputSchema } from './PrioritiesToSkillPathsWhereUniqueInputSchema';

export const PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateWithoutSkillPathInputSchema).array(),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsUncheckedCreateWithoutSkillPathInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema),z.lazy(() => PrioritiesToSkillPathsCreateOrConnectWithoutSkillPathInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToSkillPathsCreateManySkillPathInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToSkillPathsUncheckedCreateNestedManyWithoutSkillPathInputSchema;
