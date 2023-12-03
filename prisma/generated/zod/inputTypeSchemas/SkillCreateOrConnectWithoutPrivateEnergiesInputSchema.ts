import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutPrivateEnergiesInputSchema } from './SkillCreateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedCreateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const SkillCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutPrivateEnergiesInputSchema;
