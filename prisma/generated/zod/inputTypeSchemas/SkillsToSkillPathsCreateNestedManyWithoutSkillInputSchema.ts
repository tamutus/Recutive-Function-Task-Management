import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsCreateWithoutSkillInputSchema } from './SkillsToSkillPathsCreateWithoutSkillInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema';
import { SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema } from './SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema';
import { SkillsToSkillPathsCreateManySkillInputEnvelopeSchema } from './SkillsToSkillPathsCreateManySkillInputEnvelopeSchema';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';

export const SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToSkillPathsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToSkillPathsCreateNestedManyWithoutSkillInputSchema;
