import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema';
import { SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema } from './SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';

export const SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateNestedManyWithoutSkillPathInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsCreateWithoutSkillPathInputSchema).array(),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillPathInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToSkillPathsCreateManySkillPathInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToSkillPathsCreateNestedManyWithoutSkillPathInputSchema;
