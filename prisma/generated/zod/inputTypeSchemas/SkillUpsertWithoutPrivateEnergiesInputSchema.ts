import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutPrivateEnergiesInputSchema } from './SkillUpdateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { SkillCreateWithoutPrivateEnergiesInputSchema } from './SkillCreateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedCreateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.SkillUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutPrivateEnergiesInputSchema;
