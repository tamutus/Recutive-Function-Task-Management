import { z } from 'zod';

export const SkillLinkScalarFieldEnumSchema = z.enum(['precursorId','successorId','info','hourGate']);

export default SkillLinkScalarFieldEnumSchema;
