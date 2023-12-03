import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPrivateEnergiesInputSchema } from './SkillCreateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedCreateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { SkillCreateOrConnectWithoutPrivateEnergiesInputSchema } from './SkillCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutPrivateEnergiesInputSchema;
