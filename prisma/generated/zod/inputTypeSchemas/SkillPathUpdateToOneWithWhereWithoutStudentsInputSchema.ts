import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { SkillPathUpdateWithoutStudentsInputSchema } from './SkillPathUpdateWithoutStudentsInputSchema';
import { SkillPathUncheckedUpdateWithoutStudentsInputSchema } from './SkillPathUncheckedUpdateWithoutStudentsInputSchema';

export const SkillPathUpdateToOneWithWhereWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathUpdateToOneWithWhereWithoutStudentsInput> = z.object({
  where: z.lazy(() => SkillPathWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillPathUpdateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutStudentsInputSchema) ]),
}).strict();

export default SkillPathUpdateToOneWithWhereWithoutStudentsInputSchema;
