import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsSelectSchema } from '../inputTypeSchemas/EnergiesToPersonsSelectSchema';
import { EnergiesToPersonsIncludeSchema } from '../inputTypeSchemas/EnergiesToPersonsIncludeSchema';

export const EnergiesToPersonsArgsSchema: z.ZodType<Prisma.EnergiesToPersonsDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToPersonsSelectSchema).optional(),
  include: z.lazy(() => EnergiesToPersonsIncludeSchema).optional(),
}).strict();

export default EnergiesToPersonsArgsSchema;
