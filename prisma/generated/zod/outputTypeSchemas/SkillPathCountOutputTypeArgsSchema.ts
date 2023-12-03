import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathCountOutputTypeSelectSchema } from './SkillPathCountOutputTypeSelectSchema';

export const SkillPathCountOutputTypeArgsSchema: z.ZodType<Prisma.SkillPathCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SkillPathCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SkillPathCountOutputTypeSelectSchema;
