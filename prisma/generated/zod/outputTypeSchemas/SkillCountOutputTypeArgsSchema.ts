import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillCountOutputTypeSelectSchema } from './SkillCountOutputTypeSelectSchema';

export const SkillCountOutputTypeArgsSchema: z.ZodType<Prisma.SkillCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SkillCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SkillCountOutputTypeSelectSchema;
