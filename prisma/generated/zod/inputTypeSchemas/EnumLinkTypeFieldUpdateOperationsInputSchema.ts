import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const EnumLinkTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLinkTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LinkTypeSchema).optional()
}).strict();

export default EnumLinkTypeFieldUpdateOperationsInputSchema;
