import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutEnergiesInputSchema } from './SkillUpdateWithoutEnergiesInputSchema';
import { SkillUncheckedUpdateWithoutEnergiesInputSchema } from './SkillUncheckedUpdateWithoutEnergiesInputSchema';

export const SkillUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutEnergiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutEnergiesInputSchema;
