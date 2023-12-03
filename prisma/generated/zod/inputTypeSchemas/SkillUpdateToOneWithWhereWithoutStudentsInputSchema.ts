import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutStudentsInputSchema } from './SkillUpdateWithoutStudentsInputSchema';
import { SkillUncheckedUpdateWithoutStudentsInputSchema } from './SkillUncheckedUpdateWithoutStudentsInputSchema';

export const SkillUpdateToOneWithWhereWithoutStudentsInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutStudentsInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutStudentsInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutStudentsInputSchema;
