import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutEnergiesInputSchema } from './SkillUpdateWithoutEnergiesInputSchema';
import { SkillUncheckedUpdateWithoutEnergiesInputSchema } from './SkillUncheckedUpdateWithoutEnergiesInputSchema';
import { SkillCreateWithoutEnergiesInputSchema } from './SkillCreateWithoutEnergiesInputSchema';
import { SkillUncheckedCreateWithoutEnergiesInputSchema } from './SkillUncheckedCreateWithoutEnergiesInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.SkillUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutEnergiesInputSchema;
